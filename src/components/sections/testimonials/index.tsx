// src/components/sections/testimonials/index.tsx
"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "CEO, TechStart",
    content:
      "A Orpheo Digital transformou completamente nossa presença online. O aumento em leads e conversões superou todas as expectativas.",
    image: "/api/placeholder/100/100",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Marketing Director, InnovaCorp",
    content:
      "Profissionais excepcionais. O novo site e a estratégia de marketing trouxeram resultados impressionantes em poucos meses.",
    image: "/api/placeholder/100/100",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Founder, EcoTech",
    content:
      "A equipe da Orpheo entende perfeitamente as necessidades do cliente. O sistema desenvolvido revolucionou nossos processos.",
    image: "/api/placeholder/100/100",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const maxIndex = testimonials.length - 1;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias de sucesso e transformação digital
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative quote */}
          <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/10" />

          <div className="relative">
            <Card className="border border-muted bg-background/50 backdrop-blur-sm p-8 md:p-12">
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-lg md:text-xl text-foreground">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author info */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ArrowLeft className="w-4 h-4" />
              </Button>

              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
