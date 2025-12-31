
import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import LoveLetterSection from './components/LoveLetterSection';
import FinaleSection from './components/FinaleSection';
import { TIMELINE_DATA } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative bg-[#0a0a0a] text-white selection:bg-rose-500/30 selection:text-white">
      {/* Ambient background that stays fixed */}
      <BackgroundEffects />
      
      {/* Hero: Opening Scene */}
      <HeroSection />

      {/* Year Timeline: Month by Month */}
      <div className="relative z-10">
        {TIMELINE_DATA.map((month) => (
          <TimelineSection key={month.id} data={month} />
        ))}
      </div>

      {/* Memory Gallery: Intimate Moments */}
      <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <GallerySection />
      </div>

      {/* Love Letter: The Heart */}
      <div className="relative z-30">
        <LoveLetterSection />
      </div>

      {/* Finale: Emotional Closure */}
      <div className="relative z-40">
        <FinaleSection />
      </div>

      {/* Footer / Copyright info (Hidden or extremely subtle) */}
      <footer className="fixed bottom-4 left-4 z-50 opacity-20 hover:opacity-100 transition-opacity pointer-events-none">
        <p className="text-[10px] tracking-widest font-light">FOR US • ALWAYS</p>
      </footer>
    </main>
  );
};

export default App;
