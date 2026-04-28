'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative pt-16 pb-8">
      {/* Crimson Gradient Divider */}
      <div className="section-divider mb-16 mx-auto w-full max-w-5xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Brand */}
          <span className="font-serif text-xl tracking-[0.3em] uppercase font-light">
            Baccarat
          </span>
          <p className="mt-2 text-white/30 text-xs tracking-[0.2em]">
            Hoshiarpur Highway, Chandigarh
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Baccarat. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
