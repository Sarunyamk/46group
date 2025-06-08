import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import PropertiesSection from "@/components/PropertiesSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (

    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <ScrollIndicator />

      <main>
        <HeroSection />
        <ServicesSection />
        <PropertiesSection />
        <AboutSection />
        <AboutSection2 />
        <ContactSection />
      </main>
    </div>
  );
}
