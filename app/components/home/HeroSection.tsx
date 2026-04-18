"use client";

import { useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const numPlanets = 15;

    for (let i = 0; i < numPlanets; i++) {
      const planet = document.createElement("div");
      planet.className = "absolute top-1/2 left-1/2 rounded-full animate-[orbit_linear_infinite]";

      const size = Math.random() * 50 + 10;
      const radius =
        (Math.random() * 0.4 + 0.1) *
        Math.min(window.innerWidth, window.innerHeight);
      const duration = Math.random() * 100 + 50;
      const direction = Math.random() > 0.5 ? "normal" : "reverse";
      const phase = Math.random() * 100;

      planet.style.width = `${size}px`;
      planet.style.height = `${size}px`;
      planet.style.transformOrigin = "center center";
      planet.style.setProperty("--radius", `${radius}px`);
      planet.style.animationDuration = `${duration}s`;
      planet.style.animationDirection = direction;
      planet.style.background = `linear-gradient(90deg, rgba(20,20,30,1) ${phase - 30
        }%, rgba(138, 159, 252, 0.4) ${phase}%, rgba(20,20,30,1) ${phase + 30}%)`;

      container.appendChild(planet);
    }
  }, []);

  return (
    <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10">
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
          }
        }
      `}</style>

      <div ref={containerRef} className="absolute inset-0 z-[1]" />

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl mb-4 leading-tight">
          Step Into the Future of {" "}
          <span className="inline-block bg-white/10 px-[0.4em] py-[0.1em] border-l-2 border-[#8a9ffc]">
            <TypeAnimation
              sequence={[
                'Space',
                1000, 
                'Innovation',
                1000,
                'Exceptionalism',
                1000,
                'Engineering',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-[600px] mx-auto text-white/80">
          The Small Satellite Research Laboratory is developing and launching new and
          innovative technologies into space by utilizing the CubeSat platform.
        </p>
      </div>
    </section>
  );
}