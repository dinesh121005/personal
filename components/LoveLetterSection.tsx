
import React from 'react';
import { motion } from 'framer-motion';

const LoveLetterSection: React.FC = () => {
  const text = "To the one who turned everyday moments into cinematic memories. Looking back at this year, I realized it's not the places we went or the things we did that made it special—it was simply being by your side. You are the warmth in my winter and the light in my quietest hours. Thank you for choosing me every single day. I can't wait to write our next chapter together.";

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-6 py-24 relative overflow-hidden">
      {/* Subtle paper-like texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2 }}
        className="max-w-2xl w-full bg-[#fdfbf7]/[0.03] p-8 md:p-16 backdrop-blur-sm border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-sm"
      >
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <span className="font-serif italic text-2xl text-rose-200/60 block mb-8">My Love,</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 1 }}
            className="font-serif text-xl md:text-2xl leading-[1.8] text-white/80 italic text-justify"
          >
            {text}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="mt-8 text-right"
          >
            <span className="font-serif italic text-2xl text-rose-200/60 block">Yours, always.</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveLetterSection;
