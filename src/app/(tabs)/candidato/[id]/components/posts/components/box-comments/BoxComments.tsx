
export const BoxComments = () => {
  return (
    <div>
      {/* Caja de comentarios */}
      <div className="grid gap-y-3">
        <div className="flex gap-x-4">
          <div className="min-w-10 h-10 bg-gray-300 rounded-full contain-content">
            <img
              src="https://avatars.githubusercontent.com/u/148911330?v=4"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">
              Juan Daniel Sánchez Pisfil{" "}
              <span className="font-normal text-xs text-gray-500">
                {" "}
                - Hace 3 horas
              </span>
            </p>
            <p className="text-sm">
              Que recuerdos de hace 20 años con los dominios .tk o .da.ru Hoy en
              día es mejor en este caso, te pillas un dominio para pruebas y
              montas todos tus proyectos en sub dominios
            </p>
            <div className="flex items-center gap-x-5 mt-3">
              <button className="text-sm font-semibold text-primary hover:underline">
                Me gusta (12)
              </button>
              <p className="text-sm text-gray-400">|</p>
              <button className="text-sm font-semibold text-primary hover:underline">
                Responder
              </button>
              <p className="text-sm text-gray-400">|</p>
              <button className="text-sm font-semibold text-primary hover:underline">
                Ver 1 respuesta
              </button>
            </div>

            {/* Realizar comentario */}
            {/* <div className="my-3">
              <InputComment />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
