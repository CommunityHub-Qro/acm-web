"use client";

import React, { useState, useRef } from 'react';
import Link from "next/link";

const Resources_ACM = () => {
    const [showGuia, setShowGuia] = useState(false);
    const [showTutoriales, setShowTutoriales] = useState(false);
    const [showPresentaciones, setShowPresentaciones] = useState(false);
    const [showRecomendaciones, setShowRecomendaciones] = useState(false);

    const guia = () => {
        setShowGuia(true);
        setShowTutoriales(false);
        setShowPresentaciones(false);
        setShowRecomendaciones(false);
    }

    const tutoriales = () => {
        setShowGuia(false);
        setShowTutoriales(true);
        setShowPresentaciones(false);
        setShowRecomendaciones(false);
    }

    const presentaciones = () => {
        setShowGuia(false);
        setShowTutoriales(false);
        setShowPresentaciones(true);
        setShowRecomendaciones(false);
    }

    const recomendaciones = () => {
        setShowGuia(false);
        setShowTutoriales(false);
        setShowPresentaciones(false);
        setShowRecomendaciones(true);
    }

    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#500889] to-[#200039] text-white font-semibold font-serif text-8xl mb-4 backgroundAttachment: 'scroll'">
            {/* Title */}
            RECURSOS
            <div className="max-w-6xl mx-auto overflow-hidden">
                <div className="p-8">
                    <div className="tracking-wide">
                        {/* Description */}
                        <h1 className="mt-10 text-white font-bold text-xl text-center">
                            ¡Hola Comunidad!
                        </h1>
                        <p className="mt-4 text-white text-lg text-center">
                            En nuestro grupo estudiantil estamos comprometidos en ayudarte a mejorar tus habilidades de programación. Por eso, hemos recopilado todos los enlaces y presentaciones que usamos durante nuestras "Semanas Tec". Estos recursos contienen información útil y práctica que beneficiará a toda la comunidad.
                        </p>
                        <p className="mt-9 text-white text-base text-center">
                            Para ver el contenido oprime cualquiera de los cuatro botones de abajo
                        </p>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <div className="w-full sm:w-auto">
                    <button 
                        className={`bg-violet-900 ${!showGuia ? 'hover:bg-violet-700' : ''} text-xl p-4 rounded m-6 w-56 h-16`}
                        onClick={guia}
                    >
                        Guía
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button 
                        className={`bg-violet-900 ${!showTutoriales ? 'hover:bg-violet-700' : ''} text-xl p-4 rounded m-6 w-56 h-16`}
                        onClick={tutoriales}
                    >
                        Tutoriales
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button 
                        className={`bg-violet-900 ${!showPresentaciones ? 'hover:bg-violet-700' : ''} text-xl p-4 rounded m-6 w-56 h-16`}
                        onClick={presentaciones}
                    >
                        Presentaciones
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button 
                        className={`bg-violet-900 ${!showRecomendaciones ? 'hover:bg-violet-700' : ''} text-xl p-4 rounded m-6 w-56 h-16`}
                        onClick={recomendaciones}
                    >
                        Recomendaciones
                    </button>
                </div>
            </div>

            {/* Resources ACM */}
            <section className="min-h-fir flex flex-col item-center justify-center">
                {/* Resources for guides */}
                {showGuia && (
                    <div className="mt-6 text-center text-base text-white">
                        <p> Guias ICPC</p>
                            <section className="min-h-fit flex flex-col items-baseline justify-center">
                                <div className="grid grid-cols-3 gap-4 text-center text-white">
                                    <ol className="text-xl list-decimal col-span-1 m-4">
                                        <li>ICPC</li>
                                        <li>ICPC</li>
                                        <li>ICPC</li>
                                    </ol>
                                    <ol className="text-xl list-decimal col-span-1 m-4">
                                        <li>kolko</li>
                                        <li>kolko</li>
                                        <li>kolko</li>
                                    </ol>
                                    <ol className="text-xl list-decimal col-span-1 m-4">
                                        <li>item </li>
                                        <li>item </li>
                                        <li>item </li>
                                    </ol>
                                </div>
                            </section>

                    </div>
                )}
                {/* Resources for guides */}
                {showTutoriales && (
                    <div className="mt-6 text-center text-base text-white">
                        <p> Tutoriales </p>
                    </div>
                )}
                {/* Resources for presentations */}
                {showPresentaciones && (
                    <div className="mt-6 text-center text-base text-white">
                        <p> Presentaciones </p>
                    </div>
                )}
                {/* Resources for recommendations */}
                {showRecomendaciones && (
                    <div className="mt-6 text-center text-base text-white">
                        <p> Recomendaciones </p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Resources_ACM;
