// src/components/sections/about/index.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Coffee, Rocket } from "lucide-react";

const stats = [
  {
    label: "Clientes Atendidos",
    value: "200+",
    icon: Users,
    description: "Empresas transformadas digitalmente",
  },
  {
    label: "Projetos Concluídos",
    value: "500+",
    icon: Trophy,
    description: "Entregas com excelência",
  },
  {
    label: "Anos de Experiência",
    value: "5+",
    icon: Coffee,
    description: "No mercado digital",
  },
  {
    label: "Tecnologias",
    value: "30+",
    icon: Rocket,
    description: "Dominadas pela equipe",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Expertise Digital para o Seu Negócio
            </h2>

            <p className="text-muted-foreground text-lg">
              A Orpheo Digital é uma agência full-service focada em transformar
              negócios através da tecnologia e marketing digital. Nossa equipe
              multidisciplinar combina criatividade, estratégia e tecnologia
              para entregar resultados excepcionais.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <p className="text-foreground">
                  Metodologia ágil e entregas consistentes
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <p className="text-foreground">
                  Equipe especializada e dedicada
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <p className="text-foreground">
                  Foco em resultados mensuráveis
                </p>
              </div>
            </div>

            <Button size="lg" variant="secondary">
              Conheça nossa história
            </Button>
          </div>

          {/* Grid de estatísticas à direita */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 border border-muted bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-2.5 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
