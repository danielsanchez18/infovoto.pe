import React from 'react'

export const NewDetails = () => {
  return (
    <div className="grid gap-y-5">
      {/* Foto */}
      <div className="w-full h-[30rem] bg-gray-200">
        <img
          src="https://elcomercio.pe/resizer/v2/DBG3H6XICZEG7AU7KUU4ZJERTQ.jpg?auth=7b51a916fdc8d99547ced0df81872f4fc7e051ae6519a5cbb79b2a17fe86a5d4&width=1200&height=675&quality=75&smart=true"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Titular de la noticia */}
      <h1 className="text-2xl font-semibold mt-5">
        Los retos urgentes de las regiones del oriente de cara a las elecciones
        del 2026
      </h1>

      {/* Cuerpo de la noticia */}
      <div className="grid gap-y-10">
        <p>
          A menos de dos años de las elecciones del 2026, las regiones del
          oriente del país enfrentan una serie de desafíos que podrían influir
          de manera decisiva en la jornada electoral y en la agenda pública de
          los próximos gobiernos. Mandatarios locales, organizaciones sociales y
          expertos coinciden en que las problemáticas históricas se están
          combinando con nuevas tensiones sociales, económicas y ambientales.
        </p>

        <div className="grid gap-y-5">
          <p className="font-semibold text-xl">
            1. Infraestructura rezagada y conectividad limitada
          </p>
          <p>
            Uno de los principales reclamos de los habitantes del oriente es el
            deterioro de la infraestructura vial y la falta de vías alternas
            para la movilización de personas y mercancías. La conectividad
            digital sigue siendo insuficiente en zonas rurales, lo que limita el
            acceso a educación virtual, trámites estatales y oportunidades
            económicas.
          </p>

          <p className="font-semibold text-xl">
            2. Seguridad y presencia de grupos ilegales
          </p>
          <p>
            En varios municipios se ha registrado un aumento de la presencia de
            grupos armados y economías ilegales. Líderes comunitarios y
            candidatos locales expresan preocupación por la amenaza que esto
            representa para la participación política libre y segura.
          </p>

          <p className="font-semibold text-xl">
            3. Brechas socioeconómicas persistentes
          </p>
          <p>
            A pesar de algunos avances, las regiones orientales siguen
            enfrentando altos índices de pobreza multidimensional, poco acceso a
            servicios de salud, y limitaciones para la generación de empleo
            formal. La población joven, en particular, demanda políticas que
            impulsen formación técnica, emprendimiento y empleos estables.
          </p>
        </div>
      </div>
    </div>
  )
}
