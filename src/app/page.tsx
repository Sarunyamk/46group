import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "@/components/์Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <main className="bg-[#0a1e3a] text-white">
      <Navbar />
      <ScrollIndicator />

      <HeroSection />
      <section id="section-1">
        <ServicesSection />
      </section>

      <section id="section-2">
        <ContentSection
          title="Exclusive Properties"
          description="Explore our handpicked selection of luxury properties with unmatched elegance."
          images={[
            "https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZG98ZW58MHx8MHx8fDA%3D",

          ]}
          imagePosition="right"
        />
      </section>

      <section id="section-3">
        <ContentSection
          title="Modern Apartments"
          description="Stylish modern apartments with top-tier amenities and stunning views."
          images={[
            "https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZG98ZW58MHx8MHx8fDA%3D",

          ]}
          imagePosition="left"
        />
      </section>

      <section id="section-4">
        <ContentSection
          title="Commercial Spaces"
          description="Premium commercial spaces ideal for thriving businesses."
          images={[
            "https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZG98ZW58MHx8MHx8fDA%3D",

          ]}
          imagePosition="right"
        />
      </section>


      <section >
        <PortfolioSection />
      </section>


      <section >
        <TestimonialsSection />
      </section>


      <section >
        <ContactSection />
      </section>


      <Footer />
    </main>

  );
}
