// src/components/sections/portfolio/index.tsx
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Premium",
    category: "Design e Desenvolvimento",
    description:
      "Plataforma completa de e-commerce com dashboard administrativo e integração com meios de pagamento.",
    imageUrl: "/api/placeholder/600/400",
    link: "#",
  },
  {
    title: "Campanha Digital",
    category: "Marketing Digital",
    description:
      "Estratégia multicanal que aumentou em 150% o engajamento da marca nas redes sociais.",
    imageUrl: "/api/placeholder/600/400",
    link: "#",
  },
  {
    title: "Sistema de Gestão",
    category: "Desenvolvimento de Sistemas",
    description:
      "Software personalizado para gestão de processos internos e atendimento ao cliente.",
    imageUrl: "/api/placeholder/600/400",
    link: "#",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Nosso Portfólio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-muted bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="group" size="lg">
            Ver mais projetos
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
