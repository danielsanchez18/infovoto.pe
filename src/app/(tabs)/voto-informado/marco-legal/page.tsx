"use client";

import React from 'react';
import Link from 'next/link';
import { Scale, BookOpen, ArrowLeft, FileText, Gavel, Shield, AlertCircle, CheckCircle2, Users, Vote, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MarcoLegalPage() {
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
            <Scale className="w-10 h-10 text-primary" />
            <h2 className="text-xl font-semibold">Marco Legal Electoral</h2>
          </div>
          <p className="text-sm text-gray-600">
            Conoce las leyes, derechos y obligaciones que regulan el proceso electoral en Perú
          </p>
        </div>
      </section>

      {/* Normativa Principal */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Normativa Electoral Vigente</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Leyes que rigen las elecciones presidenciales 2026</p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Constitución Política del Perú</h4>
              <p className="text-sm text-gray-700 mb-2">
                Garantiza el derecho al voto y establece los principios fundamentales del sistema electoral.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span><strong>Art. 31:</strong> El voto es personal, igual, libre, secreto y obligatorio hasta los 70 años</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span><strong>Art. 176:</strong> El sistema electoral asegura que las votaciones traduzcan la voluntad popular</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Ley Orgánica de Elecciones (LOE) - Ley N° 26859</h4>
              <p className="text-sm text-gray-700 mb-2">
                Regula el proceso electoral desde la convocatoria hasta la proclamación de resultados.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>Procedimientos para inscripción de candidatos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>Causales de nulidad del voto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>Regulación de propaganda electoral</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Ley de Partidos Políticos - Ley N° 28094</h4>
              <p className="text-sm text-gray-700">
                Regula la constitución, funcionamiento y financiamiento de los partidos políticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derechos del Ciudadano */}
      <section className="grid gap-5">
        <div className="text-center">
          <h3 className="font-semibold text-lg">Derechos del Ciudadano</h3>
          <p className="text-sm text-gray-600">Tu voto está protegido por ley</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              Voto Secreto
            </h4>
            <p className="text-sm text-gray-700">
              Nadie puede obligarte a revelar por quién votaste. El secreto del voto está garantizado constitucionalmente.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              Información
            </h4>
            <p className="text-sm text-gray-700">
              Derecho a conocer las propuestas de candidatos y acceder a información electoral verificada.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              Fiscalizar
            </h4>
            <p className="text-sm text-gray-700">
              Puedes ejercer tu derecho como personero o veedor para garantizar transparencia.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              Impugnar
            </h4>
            <p className="text-sm text-gray-700">
              Puedes presentar recursos de impugnación ante irregularidades en el proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Obligaciones */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Obligaciones del Ciudadano</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Deberes que debes cumplir como elector</p>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                  <Vote className="w-5 h-5 text-primary" />
                </div>
                Voto Obligatorio
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                El voto es obligatorio para ciudadanos entre 18 y 70 años. Después es facultativo.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Base legal:</strong> Artículo 31 de la Constitución
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                Servicio como Miembro de Mesa
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                Si eres sorteado, es tu obligación cumplir esta función cívica.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Compensación:</strong> S/ 120.00
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                Actualización de Datos
              </h4>
              <p className="text-sm text-gray-700">
                Debes mantener actualizados tus datos en el RENIEC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multas */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
              <Gavel className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Sanciones y Multas</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Consecuencias del incumplimiento</p>
          
          <div className="space-y-5">
            <div className="bg-pink-50 border border-primary rounded-lg p-5">
              <h4 className="font-semibold mb-3 text-primary">Multas por No Votar</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-primary pb-2">
                  <span className="text-sm">No residentes en zona de emergencia:</span>
                  <span className="text-primary font-semibold">S/ 92.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary pb-2">
                  <span className="text-sm">Residentes en zona de emergencia:</span>
                  <span className="text-primary font-semibold">S/ 46.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Ciudadanos en el extranjero:</span>
                  <span className="text-primary font-semibold">S/ 230.00</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold mb-3 text-yellow-900">Consecuencias de No Pagar</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>No podrás realizar trámites públicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>No podrás obtener pasaporte ni DNI</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>Restricciones para viajar</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
              <h4 className="font-semibold mb-3 text-purple-900">Delitos Electorales</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Compra de votos:</strong> Hasta 6 años de prisión</li>
                <li>• <strong>Alteración de resultados:</strong> Hasta 10 años</li>
                <li>• <strong>Suplantación:</strong> Hasta 6 años</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Justificaciones */}
      <section className="grid gap-5">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Causales de Justificación</h3>
          </div>
          <p className="text-sm text-gray-600 mb-5">Situaciones que eximen de la multa</p>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                Causales Válidas
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Enfermedad grave</li>
                <li>• Viaje al exterior</li>
                <li>• Más de 100 km del local</li>
                <li>• Detención judicial</li>
                <li>• Funcionarios en servicio</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                Documentos
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Certificado médico</li>
                <li>• Boletos de viaje</li>
                <li>• Carta de trabajo</li>
                <li>• Declaración jurada</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Plazo:</strong> 15 días hábiles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organismos */}
      <section className="grid gap-5">
        <div className="text-center">
          <h3 className="font-semibold text-lg">Organismos del Sistema Electoral</h3>
          <p className="text-sm text-gray-600">Entidades que garantizan el proceso</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <div className="border border-gray-200 rounded-lg p-5 text-center">
            <h4 className="font-semibold text-lg mb-2">JNE</h4>
            <p className="text-xs text-gray-600 mb-3">Jurado Nacional de Elecciones</p>
            <p className="text-sm text-gray-700">
              Máximo órgano de administración de justicia electoral.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 text-center">
            <h4 className="font-semibold text-lg mb-2">ONPE</h4>
            <p className="text-xs text-gray-600 mb-3">Oficina Nacional de Procesos Electorales</p>
            <p className="text-sm text-gray-700">
              Organiza y ejecuta los procesos electorales.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 text-center">
            <h4 className="font-semibold text-lg mb-2">RENIEC</h4>
            <p className="text-xs text-gray-600 mb-3">Registro Nacional de Identificación</p>
            <p className="text-sm text-gray-700">
              Elabora y mantiene el padrón electoral.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="grid gap-5">
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Conoce tus derechos y ejércelos</h3>
          <p className="text-sm mb-6 opacity-90 max-w-2xl mx-auto">
            El conocimiento del marco legal te permite participar activamente en la democracia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voto-informado/seguridad">
              <Button size="lg" variant="secondary">
                Ver Recomendaciones
              </Button>
            </Link>
            <Link href="/simulador">
              <Button size="lg" variant="secondary">
                Practicar en el Simulador
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
