// src/components/sections/contact/index.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "+55 (11) 99999-9999",
    link: "tel:+5511999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@orpheodigital.com",
    link: "mailto:contato@orpheodigital.com",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "São Paulo, SP - Brasil",
    link: "#",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="prose prose-invert">
              <h3 className="text-2xl font-bold text-foreground">
                Transforme Sua Presença Digital
              </h3>
              <p className="text-muted-foreground">
                Estamos prontos para ajudar você a alcançar seus objetivos
                digitais. Entre em contato conosco e vamos começar a construir
                algo incrível juntos.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="border border-muted bg-background/50 backdrop-blur-sm p-6"
                >
                  <a
                    href={item.link}
                    className="flex items-start gap-4 hover:text-primary transition-colors"
                  >
                    <div className="rounded-lg bg-gradient-to-r from-primary to-secondary p-2.5">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <Card className="p-6 md:p-8 border border-muted bg-background/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva seu projeto ou necessidade..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
