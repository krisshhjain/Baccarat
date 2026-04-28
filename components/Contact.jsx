'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', message: '' });
      setFocused({});
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-40"
    >
      {/* Section Divider */}
      <div className="section-divider mb-24 md:mb-40 mx-auto w-full max-w-5xl" />

      <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.4em] uppercase text-crimson font-light"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mt-4"
          >
            Begin Your <span className="italic text-crimson">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-white/40 text-sm font-light max-w-md mx-auto"
          >
            For enquiries about the Boutique Factory or our collections, please
            leave your details below.
          </motion.p>
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="space-y-8 sm:space-y-12"
            >
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="contact-name"
                  className={`absolute left-0 transition-all duration-400 pointer-events-none ${
                    focused.name || formData.name
                      ? '-top-5 text-[10px] tracking-[0.3em] uppercase text-crimson'
                      : 'top-3 text-sm text-white/30'
                  }`}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  required
                  className="luxury-input w-full py-3 text-sm font-light"
                />
              </div>

              {/* Contact Field */}
              <div className="relative">
                <label
                  htmlFor="contact-email"
                  className={`absolute left-0 transition-all duration-400 pointer-events-none ${
                    focused.contact || formData.contact
                      ? '-top-5 text-[10px] tracking-[0.3em] uppercase text-crimson'
                      : 'top-3 text-sm text-white/30'
                  }`}
                >
                  Phone or Email
                </label>
                <input
                  id="contact-email"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  onFocus={() => handleFocus('contact')}
                  onBlur={() => handleBlur('contact')}
                  required
                  className="luxury-input w-full py-3 text-sm font-light"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="contact-message"
                  className={`absolute left-0 transition-all duration-400 pointer-events-none ${
                    focused.message || formData.message
                      ? '-top-5 text-[10px] tracking-[0.3em] uppercase text-crimson'
                      : 'top-3 text-sm text-white/30'
                  }`}
                >
                  Message (Optional)
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  rows={3}
                  className="luxury-input w-full py-3 text-sm font-light resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn-luxury px-12 py-4 text-xs tracking-[0.3em] uppercase text-white/90 hover:text-white"
                  id="contact-submit"
                >
                  Request Information
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-16"
            >
              {/* Animated Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                className="w-16 h-16 mx-auto mb-6 rounded-full border border-crimson/30 flex items-center justify-center"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-8 h-8 text-crimson"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              <h3 className="font-serif text-2xl font-light">Thank You</h3>
              <p className="mt-3 text-white/40 text-sm font-light">
                We&apos;ve received your enquiry. Our team will reach out
                shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
