
"use client";

import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import VideoComponent from '@/app/componentes/video';
import Sticky from '@/app/componentes/Sticky';

import FlourishV1 from '@/app/componentes/componente1';
import FlourishV2 from '@/app/componentes/componente2';
import FlourishV3 from '@/app/componentes/componente3';
import FlourishV8 from '@/app/componentes/componente8';
import GasesParallax from '@/app/componentes/GasesParallax';
import Videofinal from '@/app/componentes/Videofinal';
import Counter from '@/app/componentes/Counter';
import HorizontalScroll from '@/app/componentes/HorizontalScroll';
import HorizontalScroll2 from '@/app/componentes/HorizontalScroll2';


const AttentionPoster: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);


  return (
    <>
      <main className='bg-black'>
{/*///////// PORTADA /////////////*/}
        {/* RECTANGULO ROJO */}
        <br />
        <div className="relative bg-[#d20303] text-black p-8 rounded-xl max-w-[1410px] h-[750px] mx-auto flex flex-col justify-center items-center overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`, // Cambia 0.5 para ajustar la velocidad
              backgroundImage: 'url(/path/to/your/background/image.jpg)', // Ruta de la imagen de fondo
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
            }}
          />

          {/* Flechas decorativas en las esquinas */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-black rotate-180"></div>
          <div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-black rotate-180"></div>


          {/* ATENCION */}
          <h1 className="font-protest-guerrilla text-center text-xl font-bold mb-4 uppercase tracking-wider">
            ¡ATENCIÓN!
          </h1>

          <ParallaxProvider>
            <Parallax speed={-10}>

              {/* EL PODER DE LAS POTENCIAS ES */}
              <p className="font-protest-guerrilla text-center text-4xl mb-4 uppercase tracking-wide">
                El poder de las potencias es
              </p>


              {/* LETAL */}
              <div className="font-protest-guerrilla text-center text-[160px] sm:text-[300px] font-black tracking-wider leading-none">
                LETAL
              </div>
            </Parallax>
          </ParallaxProvider>

          <div className="font-protest-guerrilla absolute left-6 center text-xs sm:text-sm">



            {/* AÑOS */}
            <span className="bg-black text-yellow-500 px-2 py-1 rounded">1990</span>
          </div>
          <div className=" font-protest-guerrilla absolute right-6 center text-xs sm:text-sm">
            <span className="bg-black text-yellow-400 px-2 py-1 rounded">2060</span>
          </div>

          {/* Texto inferior */}
          <div className="font-protest-guerrilla absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs tracking-wider">
            VISUALIZACIÓN DE DATOS, UTDT
          </div>
        </div>



{/*///////// INTRODUCCION //////////*/}
        {/* Texto explicativo */}
        <p className="font-coda text-[20px] text-left mt-80 mb-60 mx-auto max-w-4xl leading-relaxed text-white">
          Las <span className="bg-yellow-400 text-black px-1">potencias mundiales</span> lideran el desarrollo global, pero también son responsables de un devastador impacto ambiental. A través de la emisión masiva de CO2, sus políticas y prácticas están acelerando cada vez más el <span className="bg-yellow-400 text-black px-1">cambio climático</span> y poniendo en riesgo el futuro de nuestro planeta. Es hora de responsabilizar a quienes contribuyen más al problema y exigir un cambio radical hacia un mundo más sostenible.
        </p>

        <br />




{/*///////// GASES //////////////*/}
        {/* Contenedor de los gases */}
        <section className=" sticky top-0">

          <div className="justify-left items-left mt-20 mx-20 z-50">

            <GasesParallax />

          </div>

        </section>



{/*//////// TEXTOS DE GASES /////////////////////*/}
        <section className="h-[600px]">

          <ParallaxProvider>

            <Parallax speed={-10}>
            <div className='absolute right-4 h-[600px] w-[600px] self-baseline items-baseline	 px-4'>

            <h3 className="max-w-1xl leading-relaxed font-protest-guerrilla text-[#D9D9D9] text-left text-2xl font-bold textStyle">
                ¿QUÉ SON LOS GASES DE EFECTO INVERNADERO?
            </h3> 

                <p className="font-coda text-[20px] text-left w-full max-w-1xl leading-relaxed text-white">
                  Los gases de efecto invernadero (GEI) son compuestos en la atmósfera que atrapan el calor, evitando que escape al espacio y manteniendo la Tierra a una temperatura habitable. Los principales GEI incluyen <span className="bg-blue-400 text-black px-1 py-0.5 mx-1">dióxido de carbono</span> (CO₂), <span className="bg-red-600 text-black px-1 py-0.5 mx-1">metano</span> (CH₄) y <span className="bg-purple-600 text-black px-1 py-0.5 mx-1">óxidos de nitrógeno</span> (NOx). </p>

              </div>

            </Parallax>

          </ParallaxProvider>

        </section>


        <section className="h-[600px]">

          <ParallaxProvider>

            <Parallax speed={-10}>
            <div className='absolute right-4 h-[600px] w-[600px] self-baseline items-baseline	 px-4'>

              <h3 className="max-w-1xl leading-relaxed font-protest-guerrilla uppercase text-[#D9D9D9] text-left text-2xl font-bold textStyle">
                ¿Cómo regresan éstos gases a la Tierra?
            </h3> 

                <p className='font-coda text-[20px] flex text-left w-full max-w-1xl leading-relaxed text-white'>
                  Naturalmente, la luz solar atraviesa la atmósfera y llega a la superficie de la Tierra, calentándola. Parte de este calor es reflejado, nuevamente, desde La Tierra hacia el espacio en forma de radiación infrarroja. Pero, con la intervención del ser humano se genera un exceso de gases de efecto invernadero.
                </p>

              </div>

            </Parallax>

          </ParallaxProvider>

        </section>

        <section className="h-[1000px]">

          <ParallaxProvider>

            <Parallax speed={-10}>
              <div className='absolute right-4 h-[600px] w-[600px] self-baseline items-baseline	 px-4'>

              <h3 className="max-w-1xl leading-relaxed font-protest-guerrilla uppercase text-[#D9D9D9] text-left text-2xl font-bold textStyle ">
                ¿Cómo afectan al ser humano?
            </h3> 

                <p className="font-coda text-[20px] flex text-left w-full max-w-1xl leading-relaxed text-white">
                  Con más gases de efecto invernadero en la atmósfera, una mayor cantidad de este calor es atrapada en lugar de escapar al espacio. La presencia adicional de estos gases dificulta que el calor regrese al espacio, causando que más calor se "reabsorba" en la atmósfera, generando una desregulación en la temperatura de La Tierra.
                </p>
              </div>

            </Parallax>

          </ParallaxProvider>

        </section>



{/* //////// CIUDAD //////////////*/}
<h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[70px] textStyle">¿QUÉ ACTIVIDADES LIBERAN ESTOS GASES?
</h2>

{/* //////// CIUDAD ILUSTRACION //////////////*/}
<ParallaxProvider>
  <section>
    <HorizontalScroll /> 
  </section>
</ParallaxProvider>



{/* ///////// CONTADOR DE CO2 ///////// */}
    <Counter />



{/*////////// VISUALIZACION 1 //////////*/}
        {/* Título a visualización 1 LOS TIPOS DE EMISIONES*/}
        {/* Visualización 1 */}
        <div className="grid grid-cols-8 gap-6 mt-20 top-0" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-8">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-5 ml-[45px] textStyle">¿CUÁLES SON LAS ACTIVIDADES MÁS CONTAMINANTES?
                </h2>
                <FlourishV1 />
              </pre>
            </Sticky>

          </div>
        </div>




{/*////// VISUALIZACION 2 /////////*/}
        {/* Visualización 2 */}
        <div className="grid grid-cols-8 gap-6 mt-20 top-0" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-8">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-10 ml-[45px] textStyle">¿QUIÉNES SON LOS RESPONSABLES DE ESTAS EMISIONES?
                </h2>
                <FlourishV2 />
              </pre>
            </Sticky>

          </div>
        </div>



{/* ///////// VISUALIZACION 3 /////////// */}

        <div className="grid grid-cols-8 gap-6 mt-20" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-5">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-10 ml-[45px] textStyle">LAS POTENCIAS A TRAVÉS DEL TIEMPO
                </h2>

                <FlourishV3 />
              </pre>
            </Sticky>

          </div>



          {/* Columna izquierda: Textos de las potencias */}
          <div className="col-span-3 space-y-20 overflow-y-auto">
            <ParallaxProvider>

              <Parallax speed={-10}>
                <section className="h-[1000px]"></section>




                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 1970 y 1980, <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> lideraba en emisiones de CO₂ gracias a su industrialización y consumo de combustibles fósiles. <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">La Unión Soviética</span> también presentaba altas emisiones, mientras que <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> e <span className="bg-[#ff2600] px-1 py-0.5 mx-1">India</span> contribuían poco debido a su limitada industrialización en esta etapa.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 1980 y 1990, <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> mantuvo el liderazgo en emisiones, aunque comenzaba a estabilizarse. <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">La Unión Soviética</span> tenía altos niveles de CO₂ por su industria pesada, mientras Europa Occidental iniciaba políticas de reducción de emisiones. <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> empezaba a crecer, pero aún en niveles bajos.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 1990 y 2000, <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> aumentó notablemente sus emisiones al consolidarse como potencia manufacturera. Mientras, las emisiones de <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> y <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">Rusia</span> se mantuvieron estables y la última profundizó sus políticas ambientales, logrando una reducción progresiva.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 2000 y 2010, <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> superó a Estados Unidos en emisiones debido a su expansión industrial y uso intensivo de carbón. <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> mostró una leve baja, <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">Rusia</span> continuó su descenso, y las emisiones de <span className="bg-[#ff2600] px-1 py-0.5 mx-1">India</span> aumentaron con su crecimiento económico.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-[20px] text-left w-full leading-relaxed text-white">
                    Entre 2010 y 2020, <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> lidera ampliamente en emisiones, mientras que <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> y <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">Rusia</span> siguen reduciendo su huella de carbono. Las emisiones de <span className="bg-[#ff2600] px-1 py-0.5 mx-1">India</span> continúan en ascenso y <span className="bg-[#ff8800] text-black px-1 py-0.5 mx-1">Japón</span> se mantiene muy constante, siendo, hasta la actualidad, la potencia con menor cantidad de emisiones.
                  </h2>

                </section>

              </Parallax>

            </ParallaxProvider>

          </div>

        </div>



{/* ////////// CONSECUENCIAS //////////// */}
        {/* RECTANGULO NARANJA */}
        <br />

        <div className="relative bg-[#ff8800] text-black p-8 rounded-xl max-w-[1410px] h-[750px] mx-auto flex flex-col justify-center items-center overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`, // Cambia 0.5 para ajustar la velocidad
              backgroundImage: 'url(/path/to/your/background/image.jpg)', // Ruta de la imagen de fondo
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
            }}
          />

          {/* Flechas decorativas en las esquinas */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-black rotate-180"></div>
          <div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-black rotate-180"></div>


          <ParallaxProvider>
            <Parallax speed={-10}>

              {/* CONSECUENCIAS */}
              <div className="font-protest-guerrilla text-center text-[160px] sm:text-[180px] font-black tracking-wider leading-none">
                CONSECUENCIAS
              </div>
            </Parallax>
          </ParallaxProvider>
        </div>



{/* ///////// VIDEO //////////// */}
        <section>

          <Sticky>
            <pre>
              <div className='mt-[100px]'>
              <VideoComponent />
              </div>
            </pre>
          </Sticky>


          <ParallaxProvider>
            <Parallax speed={3}>

              <div className="grid grid-cols-8 gap-6 mt-20 top-0" style={{ marginRight: '50px', marginLeft: '10px' }}>

                <div className='col-span-5'></div>

                <section className="col-span-3">
                  <p className="font-coda text-[#D9D9D9] text-lg leading-relaxed" style={{ marginTop: '10px', marginBottom: '700px' }}>
                    Los glaciares se derriten con rapidez. El nivel del mar aumenta por el deshielo. Las selvas se secan y, la flora y fauna luchan por sobrevivir.
                  </p>
                </section>

                <div className='col-span-5'></div>

                <div className='col-span-3'>
                <section className="h-[600px]">
                  <p className="text-[#D9D9D9] text-lg leading-relaxed" style={{ marginTop: '20px', marginBottom: '90px' }}>
                    “Un grupo de científicos advierten que en 2025 los daños por las emisiones de CO2 serán <span className="bg-yellow-400 text-black px-1">irreversibles</span> y desencadenarán el principio del fin del mundo” - Diario El Crosinta
                  </p>
                  </section>

                </div>
              </div>

            </Parallax>
          </ParallaxProvider>

        </section>






{/* ///////// VISUALIZACIÓN 4 - temperatura //////////// */}
        <div className="grid grid-cols-8 gap-6 mt-20" style={{ marginRight: '50px', marginLeft: '10px' }}>
          {/* Columna derecha: Visualización fija */}
          <div className="col-span-5">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[45px] textStyle">CALENTAMIENTO GLOBAL
                </h2>

                <FlourishV8 />
              </pre>
            </Sticky>
          </div>



          {/* Columna izquierda: Textos de las potencias */}
          <div className="col-span-3 space-y-20 overflow-y-auto">
            <ParallaxProvider>
              <Parallax speed={-10}>
                <section className="h-[1000px]"></section>

                <section className="h-[600px]">
                  <p className="font-coda text-[#D9D9D9] text-lg leading-relaxed" style={{ marginTop: '20px', marginBottom: '90px' }}>
                    El exceso de gases de efecto invernadero, como el dióxido de carbono, atrapa más calor en la atmósfera. Esto eleva las temperaturas globales, alterando patrones climáticos, provocando <span className="bg-yellow-400 text-black px-1">fenómenos extremos</span> como sequías e inundaciones, y afectando la biodiversidad al desestabilizar ecosistemas y derretir los polos.
                  </p>
                </section>

                <section className="h-[500px]">
                </section>

              </Parallax>
            </ParallaxProvider>
          </div>
        </div>






{/* ///////// PREDICCIONES //////////// */}
<h3 className="font-protest-guerrilla text-[#D9D9D9] flex text-left text-4xl font-bold my-5 ml-[70px]">
¿QUÉ QUEDARÁ DE NOSOTROS EN 2060?</h3>
  <Videofinal />





{/* ///////// SCROLL PESIMISTA //////////// */}
<h3 className="font-protest-guerrilla text-[#D9D9D9] flex text-left text-4xl font-bold my-5 ml-[70px]">
          ¿CÓMO SE VERÁ LA TIERRA?</h3>

<ParallaxProvider>
  <section>
    <HorizontalScroll2 />
  </section>
</ParallaxProvider>






{/* ///////// CIERRE //////////// */}
    <p className="font-coda text-[20px] text-left mt-20 mx-auto max-w-4xl leading-relaxed text-white mt-[] mb-[400px] mt-[400px]">

Las decisiones políticas y económicas de las potencias impulsan el cambio climático, afectando a todo el planeta y poniendo en riesgo nuestro futuro. Exijamos acciones responsables y tomemos decisiones diarias que protejan el medio ambiente. <span className="bg-[#d20303] text-white px-1">El cambio empieza con cada uno de nosotros.</span>
</p>



{/* ////////////// FOOTER /////////////// */}
{/* CUADRADO FOOTER */}

<div className="relative bg-[#d20303] text-black p-8 rounded-xl max-w-[1410px] h-[180px] mx-auto flex flex-col justify-center items-center overflow-hidden">
          <div
            className="absolute left-0 w-full h-[300px]"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`, // Cambia 0.5 para ajustar la velocidad
              backgroundImage: 'url(/path/to/your/background/image.jpg)', // Ruta de la imagen de fondo
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
            }}
          ></div>


{/* TEXTO FOOTER */}

<div className="absolute top-15 left-20 w-10 h-10 border-t-4 border-l-4 border-black rotate-180"></div>
<div className="absolute top-15 right-20 w-10 h-10 border-t-4 border-r-4 border-black -rotate-180"></div>

<p className="font-coda text-[18px] text-center mt-10 mx-auto max-w-4xl leading-relaxed text-black mb-[30px]">
  Alumnas
  <br />
  <span className='font-protest-guerrilla text-[22px]'>Martina Barrio y Brenda Mildiner</span>
  <br />
  Profesores
  <br />
  <span className='font-protest-guerrilla text-[22px]'>Alejandro Tumas Uffelmann, Nicolás Rivera y Luz Alba Posse</span>
  <br />
  Sección 2
  </p>

</div>


      </main >

    </>
  );
};


export default AttentionPoster;