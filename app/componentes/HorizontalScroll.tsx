

'use client';
{/*
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const HorizontalScroll: React.FC = () => {
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
    <div className="relative h-[1500vh] w-screen">
      <div 
        ref={scrollContainerRef} 
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div 
          ref={imageRef}
          className="absolute left-0 top-0 w-[11000px] h-screen"
        >
          <Image
            src="/ciudad.svg"
            alt="Visualización de datos"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

*/}

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const HorizontalScroll2: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;
    const sticky = stickyRef.current;

    if (!trigger || !sticky) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStuck) return;

    const handleScroll = () => {
      if (imageRef.current && stickyRef.current) {
        const stickyTop = stickyRef.current.getBoundingClientRect().top;

        if (stickyTop === 0) {
          // Cuando el contenedor fijo está en `top-0`, calculamos el desplazamiento horizontal
          const imageWidth = 15382; // Ancho de la imagen
          const viewportWidth = window.innerWidth;

          const totalScrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const horizontalScrollWidth = imageWidth - viewportWidth;

          const horizontalScroll =
            (window.scrollY / totalScrollHeight) * horizontalScrollWidth;

          imageRef.current.style.transform = `translateX(-${horizontalScroll}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStuck]);

  return (

    <div className="relative h-[15382vh] w-full"> {/* Aumentamos la altura */}
      <div ref={triggerRef} className="h-screen w-full" />

      <div
        ref={stickyRef}
        className={`sticky top-0 h-screen w-full overflow-hidden 
          ${isStuck ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          ref={imageRef}
          className="absolute left-0 top-0 w-[10500px] h-screen"
        >
          <Image
            src="/ciudad.svg"
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
