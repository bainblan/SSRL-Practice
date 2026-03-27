"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./missions.css";

type Mission = {
  name: string;
  sidebar: string;
  subtitle: string;
  overview: string[];
  status?: string;
  image: string;
  imageAlt: string;
};

const missions: Mission[] = [
  {
    name: "SPOC",
    sidebar: "SPOC MISSION",
    subtitle: "Spectral Ocean Color Satellite",
    overview: [
      "Funded through NASA’s USIP in 2016, SPOC monitors coastal ecosystems using a 16-band adjustable multispectral imager. It quantifies vegetation health and ocean productivity between 433 and 866 nm.",
    ],
    status:
      "Launched to the ISS in 2020. Deployment utilized the Japanese Experiment Module (JEM) Robotic Manipulator System.",
    image: "/images/missions/SPOC_patch.png",
    imageAlt: "SPOC Patch",
  },
  {
    name: "MOCI",
    sidebar: "MOCI MISSION",
    subtitle: "Multi-view On-board Computational Imager",
    overview: [
      "MOCI performs near real-time Structure from Motion (SfM) at a landscape scale. It produces 3D Digital Surface Models (DSM) on board, acting as a proof-of-concept for high-performance space processing.",
    ],
    status:
      "Winner of the AFRL University Nanosatellite Program. Currently in Phase B with expected delivery in Q2 2025.",
    image: "/images/missions/MOCI_patch.png",
    imageAlt: "MOCI Patch",
  },
  {
    name: "MEMESat-1",
    sidebar: "MEMESAT-1",
    subtitle: "Mission for Education and Multimedia Engagement",
    overview: [
      "A non-profit funded 2U satellite designed for K-12 STEM outreach. MEMESat-1 allows users to send memes directly to the satellite to engage students with radio systems and space technology.",
      "Subsystems are designed in-house by undergraduates, following NASA design principles to create unique learning experiences.",
    ],
    image: "/images/missions/MEMESAT-1.png",
    imageAlt: "MEMESat Patch",
  },
  {
    name: "COSMO",
    sidebar: "COSMO",
    subtitle: "Center for Orbital Satellite Mission Operations",
    overview: [
      "COSMO serves as the communications hub for the SSRL, overseeing ground station operations from our on-campus rotator installation.",
      "Current work focuses on ground station validation and mission radio support for MOCI and MEMESat-1 through radiation pattern testing and GNURadio development.",
    ],
    image: "/images/missions/Cosmo_patch.png",
    imageAlt: "COSMO Patch",
  },
  {
    name: "LEARNSat",
    sidebar: "LEARNSAT",
    subtitle: "Low-Entry Accessible Research Network",
    overview: [
      "LEARNSat provides affordable CubeSat kits and curriculum for high school students. It enables suborbital missions via weather balloons, paired with an e-learning platform.",
      "The goal is to inspire innovation in fields that K-12 institutions often lack resources to explore.",
    ],
    image: "/images/missions/LEARNSat_MissionPatch.png",
    imageAlt: "LEARNSat Patch",
  },
];

const researchItems = [
  "Custom environmental sensors",
  "Earth-based remote sensing",
  "GPU-based onboard computing",
  "Feature detection algorithms",
  "Neural network object tracking",
  "Multi-node interconnectivity",
  "Quantum cyber security",
];

export default function MissionsPage() {
  const particleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const dustCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgLayerRef = useRef<HTMLDivElement | null>(null);
  const lightBeamRef = useRef<HTMLDivElement | null>(null);
  const blackHoleRef = useRef<HTMLDivElement | null>(null);
  const snapContainerRef = useRef<HTMLDivElement | null>(null);
  const progressDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const particleCanvas = particleCanvasRef.current;
    const dustCanvas = dustCanvasRef.current;
    const bgLayer = bgLayerRef.current;
    const lightBeam = lightBeamRef.current;
    const blackHole = blackHoleRef.current;
    const snapContainer = snapContainerRef.current;
    const progressDot = progressDotRef.current;

    if (
      !particleCanvas ||
      !dustCanvas ||
      !bgLayer ||
      !lightBeam ||
      !blackHole ||
      !snapContainer ||
      !progressDot
    ) {
      return;
    }

    const ctx = particleCanvas.getContext("2d");
    const dtx = dustCanvas.getContext("2d");

    if (!ctx || !dtx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;

    const mouse = { x: 0, y: 0 };
    const bhPos = { x: 0, y: 0 };

    class Particle {
      angle: number;
      distance: number;
      speed: number;
      size: number;
      opacity: number;
      x: number;
      y: number;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * 450 + 100;
        this.speed = Math.random() * 0.0006 + 0.0002;
        this.size = Math.random() * 1.2;
        this.opacity = Math.random() * 0.5;
        this.x = 0;
        this.y = 0;
      }

      update() {
        this.angle += this.speed;
        this.x = width / 2 + bhPos.x + Math.cos(this.angle) * this.distance;
        this.y = height / 2 + bhPos.y + Math.sin(this.angle) * this.distance;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Dust {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (width * 0.3);
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width * 0.35) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        dtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        dtx.beginPath();
        dtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        dtx.fill();
      }
    }

    const particles: Particle[] = [];
    const dustParticles: Dust[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      particleCanvas.width = width;
      particleCanvas.height = height;
      dustCanvas.width = width;
      dustCanvas.height = height;
    };

    resize();

    for (let i = 0; i < 350; i++) particles.push(new Particle());
    for (let i = 0; i < 60; i++) dustParticles.push(new Dust());

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX - width / 2) * 0.04;
      mouse.y = (e.clientY - height / 2) * 0.04;
    };

    const handleScroll = () => {
      const scrollTop = snapContainer.scrollTop;
      const scrollHeight = snapContainer.scrollHeight - window.innerHeight;
      const totalScrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      bgLayer.style.opacity = `${Math.max(
        0,
        1 - scrollTop / (window.innerHeight * 0.8)
      )}`;

      if (scrollTop > window.innerHeight * 0.3) {
        lightBeam.style.opacity = "1";
        dustCanvas.style.opacity = "1";
      } else {
        lightBeam.style.opacity = "0";
        dustCanvas.style.opacity = "0";
      }

      const dotTop = 10 + totalScrollPercent * 80;
      progressDot.style.top = `${dotTop}%`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const fadeElements = snapContainer.querySelectorAll(".fade-in-element");
    fadeElements.forEach((el) => observer.observe(el));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dtx.clearRect(0, 0, width, height);

      bhPos.x += (mouse.x - bhPos.x) * 0.03;
      bhPos.y += (mouse.y - bhPos.y) * 0.03;

      blackHole.style.transform = `translate(calc(-50% + ${bhPos.x}px), calc(-50% + ${bhPos.y}px))`;

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      dustParticles.forEach((d) => {
        d.update();
        d.draw();
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    snapContainer.addEventListener("mousemove", handleMouseMove);
    snapContainer.addEventListener("scroll", handleScroll);

    handleScroll();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      snapContainer.removeEventListener("mousemove", handleMouseMove);
      snapContainer.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="missions-page-root">
      <div id="bg-layer" ref={bgLayerRef}>
        <div className="black-hole-void" ref={blackHoleRef} />
        <canvas id="particleCanvas" ref={particleCanvasRef} />
      </div>

      <div id="light-beam" ref={lightBeamRef} />
      <canvas id="dustCanvas" ref={dustCanvasRef} />

      <div className="global-timeline-track">
        <div className="vertical-track">
          <div className="progress-dot" ref={progressDotRef} />
        </div>
      </div>

      <div className="snap-container" ref={snapContainerRef}>
        <section className="snap-section hero">
          <div className="interface">
            <div className="top-text">SSRL</div>
            <h1 className="main-title">
              <em>MISSIONS</em>
            </h1>
            <div className="bottom-scroll-hint">DISCOVER MISSIONS</div>
          </div>
        </section>

        {missions.map((mission) => (
          <section className="snap-section mission-page" key={mission.name}>
            <div className="mission-name-sidebar">{mission.sidebar}</div>

            <div className="mission-content fade-in-element">
              <div className="mission-header">
                <h2>{mission.name}</h2>
                <p className="subtitle">{mission.subtitle}</p>
              </div>

              <div className="mission-grid">
                <div className="text-block">
                  <h3>Mission Overview</h3>
                  {mission.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {mission.status && (
                    <>
                      <h3>Current Status</h3>
                      <p>{mission.status}</p>
                    </>
                  )}
                </div>

                <div className="image-container">
                  <Image
                    src={mission.image}
                    alt={mission.imageAlt}
                    width={600}
                    height={600}
                    className="mission-img"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="snap-section mission-page research-interests">
          <div className="mission-name-sidebar">RESEARCH</div>

          <div className="mission-content fade-in-element">
            <div className="mission-header">
              <h2>Broader Interests</h2>
              <p className="subtitle">Future Frontiers &amp; Core Competencies</p>
            </div>

            <div className="research-grid">
              {researchItems.map((item, index) => (
                <div className="research-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="global-footer">UGA SSRL</div>
    </main>
  );
}