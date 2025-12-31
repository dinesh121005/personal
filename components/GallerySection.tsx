
import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';
import MomentCard from './MomentCard';

const GallerySection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif italic mb-4">Intimate Moments</h2>
          <p className="text-white/40 tracking-[0.2em] uppercase text-xs">Snapshots of a beautiful year</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-x-24 md:gap-y-32">
          {MEMORIES.map((m, i) => (
            <MomentCard key={m.id} memory={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
