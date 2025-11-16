import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const useDriverTour = () => {
  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      nextBtnText: 'Siguiente →',
      prevBtnText: '← Anterior',
      doneBtnText: '¡Entendido!',
      progressText: '{{current}} de {{total}}',
      steps: [
        {
          element: '#hero-chatbot',
          popover: {
            title: '🤖 Cicerón - Chatbot',
            description: 'Te ayudo a resolver tus preguntas sobre los planes de gobierno de los candidatos. ¡Pregúntame lo que quieras!',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '#news-section',
          popover: {
            title: '📰 Noticias Electorales',
            description: 'Encuentra noticias y avisos relacionados a la campaña electoral, incluyendo contenido de El Comercio.',
            side: 'top',
            align: 'start'
          }
        },
        {
          element: '#countdown-section',
          popover: {
            title: '⏱️ Cuenta Regresiva',
            description: 'Cronómetro de cuenta atrás para la fecha de las elecciones. ¡No te pierdas el día más importante!',
            side: 'bottom',
            align: 'center'
          }
        },
        {
          element: '#calendar-link',
          popover: {
            title: '📅 Calendario Completo',
            description: 'Haz clic aquí para ver todas las fechas alusivas a las elecciones en un timeline interactivo.',
            side: 'top',
            align: 'center'
          }
        },
        {
          element: '#groups-section',
          popover: {
            title: '🎭 Agrupaciones Políticas',
            description: 'Conoce las agrupaciones políticas más populares. Puedes explorar más partidos haciendo clic en "Ver más".',
            side: 'top',
            align: 'start'
          }
        },
        {
          element: '#info-section',
          popover: {
            title: 'ℹ️ Información Importante',
            description: 'Aquí puedes consultar tu local de votación y acceder al portal de miembro de mesa si fuiste designado.',
            side: 'top',
            align: 'start'
          }
        }
      ]
    });

    driverObj.drive();
  };

  return { startTour };
};
