import HeroSection from "@/app/components/home/HeroSection";
import AboutSection from "@/app/components/home/AboutSection";
import CubeSatSection from "@/app/components/home/CubeSatSection";
import ComponentsSection from "@/app/components/home/ComponentsSection";
import JoinSection from "@/app/components/home/JoinSection";
import SectionDivider from "@/app/components/home/SectionDivider";

export default function Page() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <CubeSatSection />
      <SectionDivider />
      <ComponentsSection />
      <SectionDivider />
      <JoinSection />
      <SectionDivider />
    </div>
  );
}