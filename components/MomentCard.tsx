
import React from 'react';
import { motion } from 'framer-motion';
import { Memory } from '../types';

interface Props {
  memory: Memory;
  index: number;
}

const MomentCard: React.FC<Props> = ({ memory, index }) => {
  // Variations for random-ish scattered look
  const rotations = [-3, 2, -1, 4];
  const offsets = [0, 20, -10, 15];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotations[index % 4] }}
      whileInView={{ opacity: 1, y: offsets[index % 4], rotate: rotations[index % 4] }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative group cursor-pointer w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-3 pb-12 shadow-2xl rounded-sm">
        <div className="aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm mb-6">
          <img 
            src={memory.image} 
            alt={memory.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale-[40%] group-hover:grayscale-0"
          />
        </div>
        <div className="px-2">
          <h3 className="font-serif italic text-lg text-white/90 mb-1">{memory.title}</h3>
          <p className="text-xs text-white/50 leading-relaxed font-light">{memory.description}</p>
        </div>
        
        {/* Subtle light reflection on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default MomentCard;
