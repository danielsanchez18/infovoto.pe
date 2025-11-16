
"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircleWarning, SquarePlus, SquareX, RotateCcw, Info } from 'lucide-react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

import { API_BASE_URL } from '@/config/api';

interface Candidate {
  id: number;
  fullName: string;
  office: string;
  biography: string;
  photoUrl: string;
  politicalGroupId: number;
  userId: number;
}

interface PoliticalGroup {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
  description: string;
  candidates: Candidate[];
}

interface PresidentialOption {
  id: number;
  party: string;
  symbol: string;
  candidate: string;
  candidateId: number;
}

export default function SimuladorPage() {
  const [selectedVote, setSelectedVote] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [presidentialOptions, setPresidentialOptions] = useState<PresidentialOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [voteIntentionId, setVoteIntentionId] = useState<number | null>(null);
  const electionId = 1;

  useEffect(() => {
    fetchPoliticalGroups();
    loadExistingVote();
  }, []);

  useEffect(() => {
    if (!loading && presidentialOptions.length > 0) {
      const hasSeenTutorial = localStorage.getItem('votingTutorialShown');
      if (!hasSeenTutorial) {
        setTimeout(() => {
          startTutorial();
          localStorage.setItem('votingTutorialShown', 'true');
        }, 500);
      }
    }
  }, [loading, presidentialOptions]);

  const fetchPoliticalGroups = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_BASE_URL}/political-groups`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();
      
      if (result.success && result.data) {
        const options: PresidentialOption[] = result.data
          .filter((group: PoliticalGroup) => 
            group.candidates.some((c: Candidate) => c.office === 'PRESIDENT')
          )
          .map((group: PoliticalGroup) => {
            const president = group.candidates.find((c: Candidate) => c.office === 'PRESIDENT');
            return {
              id: group.id,
              party: group.shortName || group.name,
              symbol: group.logoUrl || '',
              candidate: president?.photoUrl || '',
              candidateId: president?.id || 0
            };
          });
        
        setPresidentialOptions(options);
      }
    } catch (error) {
      console.error('Error fetching political groups:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadExistingVote = async () => {
    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) return;

      const user = JSON.parse(userStr);
      const userId = user.id;
      const accessToken = localStorage.getItem('accessToken');

      const response = await fetch(`${API_BASE_URL}/vote-intentions/user/${userId}/election/${electionId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();

      if (result.success && result.data && result.data.length > 0) {
        const voteIntention = result.data[0];
        setVoteIntentionId(voteIntention.id);
        setSelectedVote(voteIntention.candidate.politicalGroup.id);
      }
    } catch (error) {
      console.error('Error loading existing vote:', error);
    }
  };

  const registerVoteIntention = async (candidateId: number) => {
    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        alert('Debes iniciar sesión para registrar tu intención de voto');
        return;
      }

      const user = JSON.parse(userStr);
      const userId = user.id;
      const accessToken = localStorage.getItem('accessToken');

      const body = {
        userId,
        candidateId,
        electionId
      };

      const response = await fetch(`${API_BASE_URL}/vote-intentions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body)
      });

      const result = await response.json();

      if (result.success) {
        setVoteIntentionId(result.data.id);
      } else {
        console.error('Error registering vote intention:', result.message);
      }
    } catch (error) {
      console.error('Error registering vote intention:', error);
    }
  };

  const deleteVoteIntention = async () => {
    try {
      if (!voteIntentionId) return;
      const accessToken = localStorage.getItem('accessToken');

      const response = await fetch(`${API_BASE_URL}/vote-intentions/${voteIntentionId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const result = await response.json();

      if (result.success) {
        setVoteIntentionId(null);
      } else {
        console.error('Error deleting vote intention:', result.message);
      }
    } catch (error) {
      console.error('Error deleting vote intention:', error);
    }
  };

  const startTutorial = () => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      doneBtnText: 'Entendido',
      progressText: '{{current}} de {{total}}',
      steps: [
        {
          element: '.tutorial-title',
          popover: {
            title: '¡Bienvenido al Simulador de Votación! 🗳️',
            description: 'Aquí aprenderás cómo marcar correctamente tu cédula electoral.',
            side: "bottom",
            align: 'center'
          }
        },
        {
          element: '.tutorial-instructions',
          popover: {
            title: 'Instrucciones de Marcado',
            description: 'Debes marcar con una X o cruz dentro del recuadro de la fotografía o símbolo del candidato de tu preferencia.',
            side: "bottom",
            align: 'center'
          }
        },
        {
          element: '.tutorial-voting-area',
          popover: {
            title: 'Área de Votación',
            description: 'Haz clic sobre la fotografía del candidato o el símbolo del partido para emitir tu voto.',
            side: "top",
            align: 'center'
          }
        },
        {
          element: '.tutorial-reset',
          popover: {
            title: 'Reiniciar Cédula',
            description: 'Si te equivocas, puedes reiniciar tu cédula con este botón. En una votación real NO podrás cambiar tu voto.',
            side: "left",
            align: 'center'
          }
        },
        {
          popover: {
            title: '⚠️ Importante',
            description: 'Solo puedes votar por UN candidato. Una vez que marques tu voto, no podrás cambiarlo a menos que reinicies la cédula. ¡Elige con cuidado!',
          }
        }
      ]
    });

    driverObj.drive();
  };

  const handleVote = (politicalGroupId: number, candidateId: number): void => {
    if (selectedVote === null) {
      setSelectedVote(politicalGroupId);
      registerVoteIntention(candidateId);
    } else if (selectedVote !== politicalGroupId) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    }
  };

  const handleReset = async () => {
    if (window.confirm('¿Estás seguro de que deseas reiniciar tu cédula? Perderás tu voto actual.')) {
      await deleteVoteIntention();
      setSelectedVote(null);
      setShowWarning(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-xl font-semibold text-gray-600">Cargando simulador...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 from-blue-50 to-white">
      <style>{`
        @keyframes drawX {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .x-mark line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawX 0.5s ease-out forwards;
        }
        
        .x-mark line:nth-child(2) {
          animation-delay: 0.25s;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .shake {
          animation: shake 0.5s ease-in-out;
        }

        .driver-popover {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        
        .driver-popover-title {
          font-size: 20px;
          font-weight: bold;
          color: #1f2937;
        }
        
        .driver-popover-description {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.6;
        }
      `}</style>
      
      <div className="flex flex-row items-center justify-center gap-4 p-6 mb-4 tutorial-title">
        <h1 className="text-4xl font-bold text-gray-800">Simulador de Votación</h1>
        <button
          onClick={startTutorial}
          className="p-2 rounded-full hover:bg-blue-100 transition-colors"
          title="Ver tutorial"
        >
          <Info className="w-6 h-6 text-blue-600" />
        </button>
        <button
          onClick={handleReset}
          className="tutorial-reset flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          title="Reiniciar cédula"
        >
          <RotateCcw className="w-5 h-5" />
          Reiniciar Cédula
        </button>
      </div>
      
      <p className="text-center text-gray-600 mb-2 max-w-2xl">
        Aquí podrás expresar tu intención de voto. Vota por tu candidato favorito mientras aprendes a marcar la cédula de votación.
      </p>
      <p className="text-center text-gray-600 mb-6 max-w-2xl">
        Tu voto se verá reflejado en la sección de agrupaciones políticas.
      </p>

      {showWarning && (
        <div className="shake fixed top-4 right-4 bg-primary text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 max-w-md">
          <MessageCircleWarning className="w-6 h-6" />
          <p className="font-semibold">
            Ya has votado por un candidato. Solo puedes votar por UNO. Reinicia la cédula si deseas cambiar tu voto.
          </p>
        </div>
      )}
      
      <div className='flex flex-wrap gap-2 text-white max-w-6xl w-full'>
        <div className='w-full flex flex-col gap-2'>
          <div className='w-full text-center p-4 bg-black'>
            <h2 className='font-bold text-xl'>PRESIDENTE Y VICEPRESIDENTE</h2>
          </div>
          <p className='tutorial-instructions w-full font-bold bg-black p-4'>
            <span className="flex flex-wrap gap-2 items-center justify-center">
              <span className='text-nowrap flex flex-wrap gap-2 items-center justify-center'>
                MARQUE CON UNA CRUZ <SquarePlus className="inline" />
              </span>
              <span className='text-nowrap flex flex-wrap gap-2 items-center justify-center'>
                O UN ASPA <SquareX className="inline" /> DENTRO DEL RECUADRO
              </span>
            </span> 
            <span className="flex text-nowrap mt-2 items-center justify-center">
              DE LA FOTOGRAFÍA O SÍMBOLO DE SU PREFERENCIA
            </span>
          </p>
        </div>
        
        <div className="tutorial-voting-area text-black grid w-full grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] border-2 border-gray-400 text-xs md:text-sm bg-white shadow-lg">
          {presidentialOptions.map((item) => (
            <React.Fragment key={item.id}>
              <div className='flex items-center justify-center p-6 border-b-2 border-gray-400 bg-gray-50'>
                <p className="font-bold text-lg md:text-xl text-center">
                  {item.party}
                </p>
              </div>

              <div 
                className={`relative p-2 border-x-2 border-b-2 border-gray-400 flex justify-center items-center cursor-pointer transition-all hover:bg-blue-50 ${
                  selectedVote === item.id ? 'bg-blue-50' : ''
                } ${selectedVote !== null && selectedVote !== item.id ? 'opacity-50' : ''}`}
                onClick={() => handleVote(item.id, item.candidateId)}
              >
                <img 
                  className='object-cover w-full h-48 md:h-64' 
                  src={item.candidate} 
                  alt={item.party}
                />
                {selectedVote === item.id && (
                  <svg 
                    className="x-mark absolute inset-0 w-full h-full pointer-events-none" 
                    viewBox="0 0 100 100"
                  >
                    <line 
                      x1="10" y1="10" x2="90" y2="90" 
                      stroke="red" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />
                    <line 
                      x1="90" y1="10" x2="10" y2="90" 
                      stroke="red" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>

              <div 
                className={`relative p-2 border-b-2 border-gray-400 flex justify-center items-center cursor-pointer transition-all hover:bg-blue-50 ${
                  selectedVote === item.id ? 'bg-blue-50' : ''
                } ${selectedVote !== null && selectedVote !== item.id ? 'opacity-50' : ''}`}
                onClick={() => handleVote(item.id, item.candidateId)}
              >
                <img 
                  className='object-contain w-full h-48 md:h-64 p-4' 
                  src={item.symbol} 
                  alt={`${item.party} symbol`}
                />
                {selectedVote === item.id && (
                  <svg 
                    className="x-mark absolute inset-0 w-full h-full pointer-events-none" 
                    viewBox="0 0 100 100"
                  >
                    <line 
                      x1="10" y1="10" x2="90" y2="90" 
                      stroke="red" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />
                    <line 
                      x1="90" y1="10" x2="10" y2="90" 
                      stroke="red" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        {selectedVote && (
          <div className="w-full mt-4 p-4 bg-green-500 text-white rounded-lg text-center font-semibold">
            ✓ Has votado por {presidentialOptions.find(opt => opt.id === selectedVote)?.party}
          </div>
        )}
      </div>
    </div>
  );
}