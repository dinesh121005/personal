
import React from 'react';
import { motion } from 'framer-motion';

const FinaleSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-black relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 5 
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="z-10"
      >
        <h2 className="text-3xl md:text-5xl font-serif italic text-white/90 leading-relaxed mb-12">
          “No matter how many years pass… <br />
          <span className="text-white">I’d still choose you every time.”</span>
        </h2>

        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-rose-500/10 blur-xl flex items-center justify-center">
            <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,100,100,0.8)]">❤️</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-12"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-light">End of 2024 Chapter</span>
      </motion.div>
    </section>
  );
};

export default FinaleSection;
