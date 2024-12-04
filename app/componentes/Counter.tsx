

  'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startValue = 0;
    const endValue = 99.01;
    const duration = 2; // duración en segundos

    let startTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentCount = startValue + progress * (endValue - startValue);
      setCount(Number(currentCount.toFixed(2)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div
      ref={counterRef}
      className="font-protest-guerrilla flex flex-col items-start justify-center h-screen bg-black text-white pl-20"
    >
      <motion.div
        className="text-8xl font-bold text-red-600 text-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-bold leading-relaxed text-gray-300 my-5">
          ¿CUÁL ES EL GAS MÁS EMITIDO?
        </h3>
        {count}%
      </motion.div>
      <p className="font-coda mt-4 max-w-md text-lg leading-relaxed font-light">
        de las emisiones anuales mundiales son de CO2. Su persistencia en la atmósfera agrava el
        cambio climático y sus consecuencias ambientales.
      </p>
    </div>
  );
};

export default Counter;
