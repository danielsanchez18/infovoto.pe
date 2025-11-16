"use client";

import React from 'react';
import Link from 'next/link';
import { Shield, Scale, Vote, ArrowRight, CheckCircle2, AlertTriangle, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VotoInformadoPage() {
  return (
    <div className="py-10 grid gap-10">
      {/* Header */}
      <section className="grid gap-5">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">Voto Informado</h2>
          <p className="text-sm text-gray-600">
            Conoce todo lo necesario para ejercer tu derecho al voto de manera informada y segura
          </p>
        </div>
      </section>

      {/* Simulador de Votación */}
      <section className="grid gap-5">
        <div className="rounded-lg p-8 border-3 border-primary">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Vote className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">Simulador de Votación</h3>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Practica cómo marcar correctamente tu cédula electoral antes del día de las elecciones. 
                Aprende el proceso paso a paso de manera interactiva.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tutorial interactivo guiado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Simula tu voto de manera realista</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Aprende a evitar errores comunes</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/simulador">
                <Button size="lg" variant="secondary" className="w-full md:w-auto bg-slate-900 text-white hover:bg-black hover:scale-105 duration-300">
                  Ir al Simulador
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Principales */}
      <section className="grid gap-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Recomendaciones de Seguridad */}
          <Link href="/voto-informado/seguridad" className="group">
            <div className="grid gap-y-5 h-full bg-primary/10 rounded-xl">
              <div className="w-full aspect-video bg-gray-50 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img className="object-cover h-full text-primary" src="/img/llama-decidepe.png" alt="Seguridad" />
                </div>
              </div>
              <div className='px-6 pb-6'>
                <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors">Recomendaciones de Seguridad</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Protege tu voto y conoce las medidas de seguridad durante el proceso electoral.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Identificación segura de tu mesa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Documentos necesarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Prevención de fraude</span>
                  </li>
                </ul>
                <button className="flex items-center text-white text-sm font-semibold bg-slate-900 rounded-sm px-3 py-1 hover:bg-black transition-colors hover:scale-105 duration-300">
                  <span>Ver más</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </Link>

          {/* Marco Legal */}
          <Link href="/voto-informado/marco-legal" className="group">
            <div className="grid gap-y-5 h-full bg-primary/10 rounded-xl">
              <div className="w-full aspect-video bg-gray-50 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img className="object-cover h-full p-2 text-primary" src="/img/mascota-lupa.png" alt="Seguridad" />
                </div>
              </div>
              <div className='px-6 pb-6'>
                <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors">Marco Legal Electoral</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Conoce tus derechos, deberes y las leyes que regulan el proceso electoral.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Ley de Elecciones vigente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Derechos y obligaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Sanciones y multas</span>
                  </li>
                </ul>
                <button className="flex items-center text-white text-sm font-semibold bg-slate-900 rounded-sm px-3 py-1 hover:bg-black transition-colors hover:scale-105 duration-300">
                  <span>Ver más</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Información Importante */}
      <section className="grid gap-5">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Información Importante</h2>
          <p className="text-sm text-gray-600">
            Datos clave sobre las Elecciones Presidenciales 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Fecha de Elecciones</h3>
            <p className="text-sm text-gray-600">
              <strong>11 de abril de 2026</strong>
              <br />
              (Primera vuelta)
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Requisitos para Votar</h3>
            <p className="text-sm text-gray-600">
              DNI vigente, ser mayor de 18 años y estar en el padrón electoral
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Horario de Votación</h3>
            <p className="text-sm text-gray-600">
              De 8:00 AM a 4:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Alertas Importantes */}
      <section className="grid gap-5">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Recuerda</h3>
              <ul className="space-y-1 text-sm text-yellow-800">
                <li>• El voto es obligatorio para ciudadanos entre 18 y 70 años</li>
                <li>• No votar puede resultar en multas económicas</li>
                <li>• El secreto del voto está garantizado por la Constitución</li>
                <li>• Está prohibido hacer campaña el día de la elección</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
