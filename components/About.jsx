'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Section Divider */}
      <div className="section-divider mb-24 md:mb-40 mx-auto w-full max-w-5xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] tracking-[0.4em] uppercase text-crimson font-light"
            >
              Since 1764
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mt-4 leading-snug"
            >
              A Legacy of{' '}
              <span className="italic text-crimson">French</span>
              <br />
              Craftsmanship
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-12 h-px bg-crimson mt-8 origin-left"
            />

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 text-white/50 text-sm md:text-base leading-relaxed font-light"
            >
              For over 260 years, the Maison of Baccarat has elevated the art of
              living through its mastery of crystal. Born in the Lorraine region
              of France, Baccarat has forged an extraordinary heritage — one that
              marries centuries-old savoir-faire with an unrelenting pursuit of
              perfection.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 text-white/50 text-sm md:text-base leading-relaxed font-light"
            >
              Each piece is a testament to the artisan's hand — cut, sculpted,
              and polished to capture and refract light in ways that transcend
              the ordinary. From the tables of kings to the world's most
              discerning collectors, Baccarat remains the definitive symbol of
              crystal artistry.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex gap-12"
            >
              <div>
                <div className="font-serif text-3xl md:text-4xl text-crimson font-light">
                  260+
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 mt-1">
                  Years of Heritage
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-crimson font-light">
                  70+
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 mt-1">
                  Countries
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden"
          >
            <div className="absolute inset-0 border border-white/5" />
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <Image
                src="/images/about-craftsmanship.png"
                alt="Master craftsman working on Baccarat crystal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
            {/* Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
