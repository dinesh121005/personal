
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="z-10"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white/90 leading-relaxed max-w-4xl mx-auto">
          This year… was my favorite chapter <br /> 
          <span className="text-white">because of you.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll to begin</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-white/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
