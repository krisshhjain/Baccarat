'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'Crystal Glassware',
    description:
      'Each glass is a masterwork — precision-cut to create brilliant light play with every pour.',
    image: '/images/product-glassware.png',
    featured: true,
  },
  {
    title: 'Chandeliers',
    description:
      'Cascading prisms of light that transform spaces into palaces of illumination.',
    image: '/images/product-chandelier.png',
    featured: false,
  },
  {
    title: 'Decorative Pieces',
    description:
      'Sculptural crystal art that commands attention and captures imagination.',
    image: '/images/product-decorative.png',
    featured: false,
  },
  {
    title: 'Fragrance',
    description:
      'Iconic crystal flacons housing the world\'s most coveted scents.',
    image: '/images/product-fragrance.png',
    featured: false,
  },
];

function ProductCard({ product, index, featured }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`glass-card group relative overflow-hidden ${
        featured ? 'md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? 'aspect-[4/3] sm:aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover Glow Overlay */}
        <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-colors duration-700" />
        {/* Shine Sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Text Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide">
          {product.title}
        </h3>
        <p className="mt-3 text-white/40 text-sm font-light leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="products" className="relative py-24 md:py-40">
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
            The Art of Crystal
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mt-4"
          >
            What Baccarat <span className="italic text-crimson">Creates</span>
          </motion.h2>
        </div>

        {/* Asymmetrical Grid: 1 large + 3 small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Featured (large card spanning 2 rows) */}
          <div className="md:row-span-2 lg:col-span-1">
            <ProductCard
              product={products[0]}
              index={0}
              featured={true}
            />
          </div>

          {/* Three smaller cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {products.slice(1).map((product, index) => (
              <ProductCard
                key={product.title}
                product={product}
                index={index + 1}
                featured={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
