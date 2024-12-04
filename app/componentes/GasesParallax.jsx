import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

const GasesParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="relative h-[800px] textStyle">
      <ParallaxProvider>
        {/* Capa 1 */}
        <Parallax speed={0}>
          <Image
            src="/gasesitos_1.svg"
            alt="Capa 1 de gases"
            width={700}
            height={100}
            className={`absolute top-0 left-0 transition-opacity duration-300 ${
              scrollY < 2500 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </Parallax>
        {/* Capa 2 */}
        <Parallax speed={0}>
          <Image
            src="/gasesitos_2.svg"
            alt="Capa 2 de gases"
            width={800}
            height={200}
            className={`absolute top-0 left-0 transition-opacity duration-300 ${
              scrollY >= 2500 && scrollY < 3000 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </Parallax>
        {/* Capa 3 */}
        <Parallax speed={0}>
          <Image
            src="/gasesitos_3.svg"
            alt="Capa 3 de gases"
            width={800}
            height={100}
            className={`absolute top-0 left-0 transition-opacity duration-300 ${
              scrollY >= 3000 && scrollY < 3500 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </Parallax>
      </ParallaxProvider>
    </section>
  );
};
export default GasesParallax;