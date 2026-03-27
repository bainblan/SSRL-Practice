"use client";

import { useEffect, useState, useCallback } from "react";

interface CubesatPart {
  id: string;
  src: string;
  /** z-index (higher = in front) */
  z: number;
  /** Which section triggers this part (index into sections array) */
  appearsAt: number;
  /** Offset direction when exploded: [x%, y%] */
  offset: [number, number];
}

const parts: CubesatPart[] = [
  // Solar panels (appear at section 0 = "Solar Panels")
  { id: "panel-r", src: "/images/cubesat/parts/Right_Side_Solar_Panel.png", z: 50, appearsAt: 0, offset: [8, 0] },
  { id: "panel-l", src: "/images/cubesat/parts/Left_Side_Solar_Panel.png", z: 10, appearsAt: 0, offset: [-8, 0] },
  { id: "panel-b", src: "/images/cubesat/parts/Back_Solar_Panel.png", z: 10, appearsAt: 0, offset: [-8, 0] },
  { id: "panel-f", src: "/images/cubesat/parts/Front_Solar_Panel.png", z: 50, appearsAt: 0, offset: [8, 0] },
  { id: "panel-t", src: "/images/cubesat/parts/Top_Solar_Panel.png", z: 50, appearsAt: 0, offset: [0, -8] },
  { id: "panel-bo", src: "/images/cubesat/parts/Bottom_Solar_Panel.png", z: 10, appearsAt: 0, offset: [0, 8] },
  // Frame (appears at section 1 = "The Frame")
  { id: "frame-front", src: "/images/cubesat/parts/Frame_Front.png", z: 40, appearsAt: 1, offset: [8, 0] },
  { id: "frame-back", src: "/images/cubesat/parts/Frame_Back.png", z: 10, appearsAt: 1, offset: [8, 0] },
  { id: "frame-ext", src: "/images/cubesat/parts/Frame_Extention.png", z: 20, appearsAt: 1, offset: [0, -8] },
  { id: "frame-end", src: "/images/cubesat/parts/Back_Frame_End_Plate.png", z: 10, appearsAt: 1, offset: [-8, 0] },
  // ADCS (appears at section 2)
  { id: "adcs", src: "/images/cubesat/parts/MAI100.png", z: 15, appearsAt: 2, offset: [-8, 0] },
  { id: "adcs-m", src: "/images/cubesat/parts/Interface_Module.png", z: 18, appearsAt: 2, offset: [-8, 0] },
  // Payload (appears at section 3)
  { id: "payload", src: "/images/cubesat/parts/Nanocam.png", z: 30, appearsAt: 3, offset: [15, 0] },
  // Computer (appears at section 4)
  { id: "computer-mb", src: "/images/cubesat/parts/Motherboard.png", z: 25, appearsAt: 4, offset: [20, 0] },
  { id: "computer-ppm", src: "/images/cubesat/parts/PPM.png", z: 24, appearsAt: 4, offset: [-3, 0] },
  { id: "computer-eps", src: "/images/cubesat/parts/EPS_Module.png", z: 23, appearsAt: 4, offset: [-12, 0] },
  { id: "computer-gps", src: "/images/cubesat/parts/GPS_Module.png", z: 22, appearsAt: 4, offset: [-30, 0] },
];

/**
 * Maps a scroll-driven "active section" (0..5) to each part's transform.
 * Parts start offscreen/invisible, slide in when their section is active,
 * then converge to center when the final "Our Spacecraft" section is reached.
 */
export default function CubesatParallax({ activeSection }: { activeSection: number }) {
  return (
    <div
      className="hidden lg:block fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div className="relative w-full h-full">
        {parts.map((part) => {
          const appeared = activeSection >= part.appearsAt;
          const assembled = activeSection >= 5;

          // Not visible yet
          if (!appeared) {
            return (
              <div
                key={part.id}
                className="absolute transition-all duration-700 ease-out opacity-0"
                style={{
                  top: "40%",
                  left: "27%",
                  width: "50%",
                  zIndex: part.z,
                  transform: `translate(${part.offset[0] * 3}%, ${part.offset[1] * 3}%)`,
                }}
              />
            );
          }

          // Assembled: all parts converge to center
          const tx = assembled ? 0 : part.offset[0];
          const ty = assembled ? 0 : part.offset[1];

          return (
            <img
              key={part.id}
              src={part.src}
              alt=""
              className="absolute transition-all duration-700 ease-out"
              style={{
                top: "40%",
                left: "27%",
                width: "50%",
                zIndex: part.z,
                opacity: appeared ? 1 : 0,
                transform: `translate(${tx}%, ${ty}%)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
