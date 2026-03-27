"use client";

import { useScrollFade } from "../hooks/useScrollFade";

export default function ScrollSection({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  const { ref, visible } = useScrollFade(0.2);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-[70vh] flex items-center justify-center px-6 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-[#F6F6F6] mb-6 font-[Montserrat,sans-serif] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)]">
          {title}
        </h2>
        <p className="text-sm text-[#F6F6F6] font-[Armata,sans-serif] leading-relaxed drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)]">
          {children}
        </p>
      </div>
    </section>
  );
}
