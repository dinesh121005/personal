
import React from 'react';
import { motion } from 'framer-motion';
import { TimelineMonth } from '../types';

interface Props {
  data: TimelineMonth;
}

const TimelineSection: React.FC<Props> = ({ data }) => {
  return (
    <section className={`min-h-screen w-full flex items-center justify-center p-8 md:p-24 bg-gradient-to-b ${data.color} transition-colors duration-1000`}>
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Month Visual/Icon Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 group-hover:bg-white/10 transition-colors duration-700"></div>
            <div className="relative text-8xl md:text-9xl filter drop-shadow-2xl select-none">
              {data.accent}
            </div>
          </div>
        </motion.div>

        {/* Text Content Side */}
        <div className="flex-1 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.5em] uppercase font-light mb-4"
          >
            {data.monthName}
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight"
          >
            {data.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0 text-slate-300"
          >
            {data.caption}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
