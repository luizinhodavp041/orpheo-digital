// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/sections/navbar";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { AboutSection } from "@/components/sections/about";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col pt-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] p-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 text-center">
            <h1 className="text-7xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text pb-3">
              Orpheo Digital
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground mx-auto">
              Transformando ideias em experiências digitais memoráveis
            </p>
            <Button size="lg">Conheça nosso trabalho</Button>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* About Section */}
        <AboutSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
