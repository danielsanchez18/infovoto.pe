import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full py-10">
            <div className="w-full max-w-[80rem] mx-auto px-5">

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 md:gap-x-10">

                    <article className="text-sm flex flex-col gap-y-3">
                        <div>
                            <img src="/img/DecidePE - Logo.png" alt="Logo Decide.PE" className="w-32 mb-3 object-contain" />
                        </div>
                        <button className="text-gray-600 hover:text-gray-900 hover:underline w-fit">¿Como usarlo?</button>
                        <a href="/agrupaciones" className="text-gray-600 hover:text-gray-900 hover:underline w-fit">Agrupaciones</a>
                        <a href="/" className="text-gray-600 hover:text-gray-900 hover:underline w-fit">Resuleve tus dudas</a>
                    </article>

                    <article className="text-sm flex flex-col gap-y-3 mx-auto">
                        <h3 className="font-semibold text-gray-900 mb-3">Información</h3>
                        <a href="/fechas" className="text-gray-600 hover:text-gray-900 hover:underline w-fit">Fechas</a>
                        <a href="/noticias" className="text-gray-600 hover:text-gray-900 hover:underline w-fit">Noticias</a>
                        <a href="/simulador" className="text-gray-600 hover:text-gray-900 hover:underline w-fit">¿Como votar?</a>
                        <a href="/voto-informado" className="text-gray-600 hover:text-gray-900 hover:underline w-fit">Voto informado</a>
                    </article>

                    <article className="text-sm flex flex-col gap-y-3 ml-auto">
                        <h3 className="font-semibold text-gray-900 mb-3">Disponible en:</h3>

                        <a href="" className="flex gap-x-2 lg:gap-x-3 rounded-xl py-3 px-3 lg:px-5 pr-8 w-fit bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs">
                            <img src="https://cdn-icons-png.flaticon.com/512/15/15476.png" alt="Logo App Store" className="size-5 lg:size-6 object-contain" />
                            <div className="flex flex-col">
                                <p className="leading-none text-gray-600 text-[10px] truncate">Disponible en la</p>
                                <p className="leading-none text-gray-900 font-semibold text-xs lg:text-sm">App Store</p>
                            </div>
                        </a>

                        <a href="" className="flex gap-x-2 lg:gap-x-3 rounded-xl py-3 px-3 lg:px-5 pr-8 w-fit bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs">
                            <img src="https://img.icons8.com/fluent/600/google-play-store-new.png" alt="Logo Google Play" className="size-5 lg:size-6 object-contain" />
                            <div className="flex flex-col">
                                <p className="leading-none text-gray-600 text-[10px] truncate">Disponible en la</p>
                                <p className="leading-none text-gray-900 font-semibold text-xs lg:text-sm">Google Play</p>
                            </div>
                        </a>
                    </article>
                </div>

                <div className="flex flex-wrap max-sm:justify-center items-center gap-x-3 gap-y-2 mt-10">
                    <a href="/" className="text-xs text-gray-600 hover:underline hover:text-gray-900 text-nowrap">© 2025 Decide.PE</a>
                    <div className="rounded-full size-1 bg-gray-600"></div>
                    <p className="text-xs text-gray-600 text-nowrap">Todos los derechos reservados.</p>
                </div>

            </div>
        </footer>

    )
}