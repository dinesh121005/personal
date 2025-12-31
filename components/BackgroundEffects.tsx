
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Create a slight parallax effect based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft gradient orbs */}
      <motion.div 
        style={{ x: mousePos.x, y: y1 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ x: -mousePos.x, y: y2 }}
        className="absolute bottom-0 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"
      />
      
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};

export default BackgroundEffects;
