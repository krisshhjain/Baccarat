'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Location() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative py-24 md:py-40"
    >
      {/* Section Divider */}
      <div className="section-divider mb-24 md:mb-40 mx-auto w-full max-w-5xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.4em] uppercase text-crimson font-light"
          >
            Boutique Factory
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mt-4"
          >
            The New <span className="italic text-crimson">Destination</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-stretch">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 sm:p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="text-[11px] tracking-[0.4em] uppercase text-white/30 mb-6">
                Location
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-light leading-snug">
                Hoshiarpur Highway,
                <br />
                <span className="text-crimson">Chandigarh</span>
              </h3>
              <div className="w-8 h-px bg-crimson mt-6 mb-6" />
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Nestled along the scenic Hoshiarpur Highway, the Baccarat
                Boutique Factory invites you to experience two centuries of
                French crystal mastery — reimagined for the modern world.
              </p>

              {/* Address Details */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-crimson mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white/50 text-sm font-light">
                    Hoshiarpur Highway, Chandigarh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 border border-crimson/30 rounded-full glow-pulse">
                <div className="w-2 h-2 rounded-full bg-crimson" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/60">
                  Visit Experience Coming Soon
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card overflow-hidden relative min-h-[300px] sm:min-h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=30.79,76.85&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.5)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baccarat Boutique Factory Location Map"
              className="absolute inset-0"
            />
            {/* Map overlay for branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
