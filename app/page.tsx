import Image from "next/image";
import ScrollSection from "./components/ScrollSection";
import CubesatParallax from "./components/CubesatParallax";

export default function Home() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url(/images/stars/Starsmid.png)",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Cubesat parallax — scroll-driven, self-contained */}
      <CubesatParallax />

      {/* ===== SPLASH ===== */}
      <section className="flex flex-col items-center justify-center text-center pt-16 pb-8 px-6">
        <Image
          src="/images/logos/ssrl_logo_long-new.png"
          alt="UGA Small Satellite Research Laboratory"
          width={800}
          height={200}
          className="w-full max-w-2xl h-auto mb-8"
          unoptimized
        />

        {/* Sponsor logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          <Image
            src="/images/logos/unp_logo3.png"
            alt="University Nanosatellite Program"
            width={200}
            height={80}
            className="h-16 w-auto"
            unoptimized
          />
          <Image
            src="/images/logos/nasa_logo.png"
            alt="NASA"
            width={200}
            height={80}
            className="h-16 w-auto"
            unoptimized
          />
          <Image
            src="/images/logos/air_force_logo.png"
            alt="U.S. Air Force"
            width={200}
            height={80}
            className="h-16 w-auto"
            unoptimized
          />
        </div>

        <p className="max-w-2xl font-[Armata,sans-serif] leading-relaxed">
          The Small Satellite Research Laboratory (SSRL) is developing and
          launching new and innovative technologies into space by utilizing the
          CubeSat platform, a small-scale satellite that is designed for rapid
          iteration and development. The lab is currently driving technological
          innovation at UGA through the building of 2 satellites, funded by the
          Air Force and NASA. The UGA SSRL was founded in 2016, primarily as an
          avenue for undergraduates to design, build, and test space-ready
          components. Over the past three years, the SSRL has steadily increased
          the reach of its research, student involvement, and community
          enrichment.
        </p>
      </section>

      {/* ===== CUBESAT INTRO ===== */}
      <ScrollSection title="The CubeSat" id="basic-info">
        The CubeSat is a new standard that allows students to access space like
        never before. We can design, build, and control our own miniature
        spacecraft. CubeSat&apos;s are a class of small satellites composed of
        modular units 10cm&times;10cm&times;10cm in size, but the entire
        satellite cannot be larger than 1.33kg. Scroll down and let us give you
        an example walk through of what is in a typical CubeSat.
      </ScrollSection>

      {/* ===== CUBESAT WALKTHROUGH SECTIONS ===== */}
      <ScrollSection title="Solar Panels" id="solar-panels">
        Like any other space craft, a CubeSat needs energy to survive. Solar
        panels provide the satellite with energy so that it can power its
        systems. Solar panels are the standard of power generation in Low Earth
        Orbit.
      </ScrollSection>

      <ScrollSection title="The Frame" id="frame">
        The frame of the CubeSat holds the parts of the satellite in place like
        the payloads and core avionics. The frame also helps dissipate excess
        heat while the satellite is in orbit. When the satellite is launched, the
        frame helps ensure that all of the parts stay in place and the system is
        structurally stable.
      </ScrollSection>

      <ScrollSection title="ADCS" id="adcs">
        The ADCS is the satellite&apos;s Attitude Determination and Control
        System. This is what lets the CubeSat move around and reorient itself in
        space. While not all CubeSat missions require an ADCS, most missions
        that require some level of precision will.
      </ScrollSection>

      <ScrollSection title="The Payload" id="payload">
        The payload of the CubeSat is the instrument that gathers the primary
        scientific data in orbit. Every mission has a different payload, so here
        we have an example camera payload. This system could image the Earth in
        fine detail from Low Earth Orbit.
      </ScrollSection>

      <ScrollSection title="The Computer" id="computer">
        At the heart of the CubeSat is the computer, but don&apos;t let its size
        fool you. Though it may be small, it can be more powerful than the Apollo
        moon mission&apos;s flight computers. Thanks to smart phones, we are able
        to cram more computational power into a small space than ever before. In
        some cases, these boards can even run a Linux kernel. Our lab focuses on
        making these computers stronger and better suited for the space
        environment.
      </ScrollSection>

      <ScrollSection title="Our Spacecraft" id="spacecraft">
        The spacecraft that we design, build, and test in the Small Satellite
        Research Laboratory (as well as most CubeSats in general) are all similar
        to this design. If you are a student with an interest in spacecraft, why
        don&apos;t you join us?
      </ScrollSection>

      {/* ===== EARTH IMAGE ===== */}
      <div className="w-full -mb-1">
        <Image
          src="/images/space/earth.png"
          alt="Earth from space"
          width={1920}
          height={400}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    </div>
  );
}
