import React, { useEffect } from 'react';
import { Milk } from 'lucide-react';

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="size-full bg-gradient-to-br from-primary via-primary to-accent flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="animate-bounce">
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/30">
            <Milk className="w-24 h-24 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="mt-8 text-white tracking-tight" style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          MilkMate
        </h1>
        <p className="mt-3 text-white/90 tracking-wide" style={{ fontSize: '1.125rem' }}>Smart Dairy. Smarter Living.</p>
        <div className="mt-16 flex gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse [animation-delay:0.2s]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );
}
