export const GovernmentPlan = () => {
  return (
    <div className="grid gap-y-5">
      {/* Categoria */}
      <h4 className="text-sm uppercase font-semibold">
        NOMBRE DEL SECTOR (SALUD, EDUCACION)
      </h4>

      {/* Contenido */}
      <div className="grid border border-gray-200 divide-y divide-gray-200">
        <h5 className="px-4 py-3  bg-gray-100 font-semibold text-sm">
          BAJO ÍNDICE DE INVERSIÓN EN SALUD
        </h5>

        <div className="grid grid-cols-2 gap-x-10 py-4">
          <p className="text-sm px-4">
            <span className="font-semibold">OBJETIVO:</span> INCREMENTAR EL PRESUPUSTO DEL SECTOR SALUD EN NUESTRA PROVINCIA A
            TRAVES EL GOBIERNO LOCAL Y MEDIANTE GESTION ANTE LAS INSTANCIAS
            PERTINENTES
          </p>
          <p className="text-sm px-4">
            <span className="font-semibold">OBJETIVO:</span> INCREMENTAR EL PRESUPUSTO DEL SECTOR SALUD EN NUESTRA PROVINCIA A
            TRAVES EL GOBIERNO LOCAL Y MEDIANTE GESTION ANTE LAS INSTANCIAS
            PERTINENTES
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 py-4">
          <div className="text-sm px-4 uppercase">
            <p className="font-semibold mb-2">INDICADOR</p>
            <p className="">1. Fortalecimiento de las capacidades del Comité Provincial de Salud, con el fin de proponer la política de salud pública de la provincia.</p>
            <p className="">2. Fortalecimiento de las instancias de articulación local para la lucha contra la anemia y la desnutrición infantil en la provincia.</p>
            <p className="">3. Elaboración y ejecución de proyectos para la lucha contra la desnutrición infantil y la anemia en la provincia de Cajabamba.</p>
            <p className="">4. Mejoramiento del servicio en el Hospital Municipal y realización de
            campañas médicas especializadas, periódicas y descentralizadas, a favor de la población cajabambina.</p>
          </div>
          <div className="text-sm px-4 uppercase">
            <p className="font-semibold mb-2">INDICADOR</p>
            <p className="">1. Fortalecimiento de las capacidades del Comité Provincial de Salud, con el fin de proponer la política de salud pública de la provincia.</p>
            <p className="">2. Fortalecimiento de las instancias de articulación local para la lucha contra la anemia y la desnutrición infantil en la provincia.</p>
            <p className="">3. Elaboración y ejecución de proyectos para la lucha contra la desnutrición infantil y la anemia en la provincia de Cajabamba.</p>
            <p className="">4. Mejoramiento del servicio en el Hospital Municipal y realización de
            campañas médicas especializadas, periódicas y descentralizadas, a favor de la población cajabambina.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 py-4">
          <p className="text-sm px-4">
            <span className="font-semibold">META (2023-2026):</span> CUMPLIR MINIMAMENTE EL 80& DE LO DESCRITO EN NUESTRO PLAN DE TRABAJO
          </p>
        </div>
      </div>
    </div>
  );
};