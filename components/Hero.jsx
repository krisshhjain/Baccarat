'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleExplore = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/hero-crystal.png"
          alt="Baccarat crystal refracting light"
          fill
          sizes="100vw"
          className="object-cover"
          preload
          quality={90}
        />
      </motion.div>

      {/* Shimmer Overlay */}
      <div className="shimmer-overlay" />

      {/* Gradient Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Bottom Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-6 text-center"
        style={{ opacity, y }}
      >
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-px bg-crimson mb-8"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight"
        >
          <span className="italic">Crafted</span> in Light.
          <br />
          <span className="text-crimson italic">Defined</span> by Legacy.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 md:mt-8 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/60 font-light max-w-xl px-2"
        >
          Introducing Baccarat Boutique Factory — Chandigarh
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleExplore}
          className="btn-luxury mt-8 md:mt-14 px-6 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/90 hover:text-white"
          id="hero-cta"
        >
          Explore the World of Baccarat
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 scroll-indicator"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-white/30"
            >
              <path
                d="M7.29 23.71a1 1 0 001.42 0l6.36-6.36a1 1 0 00-1.42-1.42L8 21.59l-5.65-5.66a1 1 0 00-1.42 1.42l6.36 6.36zM7 0v23h2V0H7z"
                fill="currentColor"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
