'use client';

import { useEffect, useState } from 'react';

export default function Landing() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Enhanced animated aurora background layers */}
      <div className="absolute inset-0 bg-aurora-layer-1" />
      <div className="absolute inset-0 bg-aurora-layer-2" />
      <div className="absolute inset-0 bg-aurora-layer-3" />
      
      {/* Floating particles overlay */}
      <div className="absolute inset-0 bg-particles" />
      
      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="text-[clamp(80px,20vw,200px)] font-bold tracking-tight tabular-nums">
            {hours}:{minutes}:{seconds}
          </div>
          <div className="mt-4 text-[clamp(18px,3vw,32px)] font-light text-white/60">
            {time.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

