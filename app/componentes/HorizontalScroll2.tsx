
'use client'
{/*
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const HorizontalScroll2: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const image = imageRef.current;

    if (!scrollContainer || !image) return;

    const handleScroll = () => {
      image.style.transform = `translateX(-${window.scrollY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[500vh] w-full">
      <div 
        ref={scrollContainerRef} 
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div 
          ref={imageRef}
          className="absolute left-0 top-0 w-[11000px] h-screen"
        >
          <Image
            src="/ciudad2060.svg"
            alt="Visualización de datos"
            layout= "fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll2;
*/}

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const HorizontalScroll2: React.FC = () => {
  const triggerRef2 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const stickyRef2 = useRef<HTMLDivElement>(null);
  const [isStuck2, setIsStuck2] = useState(false);

  useEffect(() => {
    const trigger = triggerRef2.current;
    const sticky = stickyRef2.current;

    if (!trigger || !sticky) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck2(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStuck2) return;

    const handleScroll = () => {
      if (imageRef2.current && stickyRef2.current) {
        const stickyTop = stickyRef2.current.getBoundingClientRect().top;

        if (stickyTop === 0) {
          // Cuando el contenedor fijo está en `top-0`, calculamos el desplazamiento horizontal
          const imageWidth = 7224; // Ancho de la imagen
          const viewportWidth = window.innerWidth;

          const totalScrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const horizontalScrollWidth = imageWidth - viewportWidth;

          const horizontalScroll2 =
            (window.scrollY / totalScrollHeight) * horizontalScrollWidth;

          imageRef2.current.style.transform = `translateX(-${horizontalScroll2}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStuck2]);

  return (

    <div className="relative h-[40000vh] w-full"> {/* Aumentamos la altura */}
      <div ref={triggerRef2} className="h-screen w-full" />

      <div
        ref={stickyRef2}
        className={`sticky top-0 h-screen w-full overflow-hidden 
          ${isStuck2 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          ref={imageRef2}
          className="absolute left-0 top-0 w-[7000px] h-screen"
        >
          <Image
            src="/ciudad2060.svg"
            alt="Visualización de datos"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>

  );
};

export default HorizontalScroll2;
