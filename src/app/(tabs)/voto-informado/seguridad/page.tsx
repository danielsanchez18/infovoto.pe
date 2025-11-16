"use client";

import React from 'react';
import Link from 'next/link';
import { Shield, AlertTriangle, CheckCircle2, ArrowLeft, Eye, Lock, Users, MapPin, FileText, Camera, AlertCircle, Phone, Smartphone, Globe, CircleCheck, CircleX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SeguridadPage() {
  return (
    <div className="py-10 grid gap-10">
      {/* Back Button & Header */}
      <section className="grid gap-5">
        <Link href="/voto-informado">
          <Button variant="outline" className="w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Voto Informado
          </Button>
        </Link>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-10 h-10 text-primary" />
            <h2 className="text-xl font-semibold">Recomendaciones de Seguridad</h2>
          </div>
          <p className="text-sm text-gray-600">
            Protege tu derecho al voto y participa de manera segura en las Elecciones Presidenciales 2026
          </p>
        </div>
      </section>

      {/* Antes del Día de Votación */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-lg">Antes del Día de Votación</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Prepárate con anticipación</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Verifica tu Local de Votación</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Consulta en la página oficial de ONPE o RENIEC tu lugar de votación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Visita el local con anticipación para conocer la ubicación exacta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Planifica tu ruta y horario de llegada</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Documenta tu DNI</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Verifica que tu DNI esté vigente (puede estar caducado, pero debe ser legible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Ten una copia de tu DNI como respaldo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Si perdiste tu DNI, solicita un duplicado con urgencia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Durante el Día de Votación */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-lg">Durante el Día de Votación</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Mantente alerta y seguro</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Protección Personal</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Lleva solo lo necesario: DNI, lapicero y una pequeña cantidad de dinero</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Evita llevar objetos de valor, joyas o dispositivos electrónicos costosos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>De preferencia, acude acompañado de familiares o amigos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">En la Mesa de Votación</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>Verifica que los miembros de mesa tengan sus credenciales visibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>No permitas que nadie te presione o influencie en tu voto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>El voto es secreto: nadie debe ver por quién votas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span>No está permitido tomar fotos dentro de la cámara secreta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevención de Fraude */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-lg">Prevención de Fraude Electoral</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Identifica y reporta irregularidades</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Señales de Alerta</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span><strong>Compra de votos:</strong> Rechaza cualquier ofrecimiento de dinero a cambio de tu voto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span><strong>Intimidación:</strong> Reporta si alguien te amenaza o presiona</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary mt-0.5bg-gray-50" />
                    <span><strong>Material irregular:</strong> Reporta cédulas adulteradas o material sospechoso</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-primary rounded-lg p-5">
              <h4 className="font-semibold text-red-900 mb-3">¿Cómo Reportar Irregularidades?</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li className='flex flex-inline gap-2 items-center'><Phone className='w-4' /> <strong>Línea gratuita ONPE:</strong> 0800-12-626</li>
                <li className='flex flex-inline gap-2 items-center'><Smartphone className='w-4' /> <strong>Aplicación móvil:</strong> "Voto Informado ONPE"</li>
                <li className='flex flex-inline gap-2 items-center'><Globe className='w-4' /> <strong>Web:</strong> www.onpe.gob.pe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones Generales */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-lg">Recomendaciones Generales</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="flex flex-inline items-center gap-2 font-semibold mb-3 text-green-700"><CircleCheck className="inline w-5 h-5" /> SÍ Hacer</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Llega temprano al local de votación</li>
                <li>• Mantén la calma y paciencia</li>
                <li>• Respeta el orden</li>
                <li>• Colabora si eres miembro de mesa</li>
                <li>• Respeta el secreto del voto</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="flex flex-inline items-center gap-2 font-semibold mb-3 text-red-700"><CircleX className="inline w-5 h-5" /> NO Hacer</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• No hagas campaña el día de votación</li>
                <li>• No portes propaganda política</li>
                <li>• No consumas alcohol</li>
                <li>• No alteres el orden</li>
                <li>• No fotografíes tu voto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="grid gap-5">
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Tu voto es valioso y debe ser protegido</h3>
          <p className="text-sm mb-6 opacity-90 max-w-2xl mx-auto">
            Ejercer tu derecho al voto de manera informada y segura es fundamental para nuestra democracia.
          </p>
          <Link href="/simulador">
            <Button size="lg" variant="secondary">
              Practicar en el Simulador
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
