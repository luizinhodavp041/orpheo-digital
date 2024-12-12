// src/components/sections/services/index.tsx
import { Card } from "@/components/ui/card";
import { Palette, Globe, LineChart, Code2, Layout } from "lucide-react";

const services = [
  {
    title: "Marketing Digital",
    description:
      "Estratégias personalizadas de marketing digital para aumentar sua presença online e converter mais clientes.",
    icon: LineChart,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Design e Desenvolvimento de Sites",
    description:
      "Criação de websites modernos, responsivos e otimizados para conversão.",
    icon: Layout,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Branding e Design Gráfico",
    description:
      "Desenvolvimento de identidade visual e materiais gráficos que fortalecem sua marca.",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Soluções tecnológicas sob medida para otimizar seus processos e impulsionar seu negócio.",
    icon: Code2,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Gestão de Presença Online",
    description:
      "Gerenciamento completo da sua presença digital, incluindo redes sociais e reputação online.",
    icon: Globe,
    gradient: "from-orange-500 to-amber-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="container relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e
            impulsionar seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-muted bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`}
                />
              </div>

              <div className="relative p-6 space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} p-2.5 flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
