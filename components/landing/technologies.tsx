"use client";

import { useEffect, useRef } from "react";

const technologies = [
  // AI & APIs
  {
    name: "OpenAI",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/openai/FFFFFF",
  },
  {
    name: "Anthropic Claude",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/anthropic/FFFFFF",
  },
  {
    name: "WhatsApp",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/whatsapp/FFFFFF",
  },
  {
    name: "n8n",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/n8n/FFFFFF",
  },
  {
    name: "Make",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/make/FFFFFF",
  },
  {
    name: "Zapier",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/zapier/FFFFFF",
  },
  {
    name: "ManyChat",
    category: "Automação & IA",
    icon: "https://cdn.simpleicons.org/manychat/FFFFFF",
  },

  // Frontend & Framework
  {
    name: "Next.js",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  },
  {
    name: "React",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/react/FFFFFF",
  },
  {
    name: "TypeScript",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/typescript/FFFFFF",
  },
  {
    name: "Tailwind CSS",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/tailwindcss/FFFFFF",
  },
  {
    name: "Node.js",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/nodedotjs/FFFFFF",
  },
  {
    name: "Vercel",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
  },

  // Database & Backend
  {
    name: "Supabase",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/supabase/FFFFFF",
  },
  {
    name: "PostgreSQL",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/postgresql/FFFFFF",
  },
  {
    name: "MongoDB",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/mongodb/FFFFFF",
  },
  {
    name: "Google Cloud",
    category: "Websites & Aplicações Web",
    icon: "https://cdn.simpleicons.org/googlecloud/FFFFFF",
  },

  // CMS & E-commerce
  {
    name: "WordPress",
    category: "E-commerces & Plataformas de Venda",
    icon: "https://cdn.simpleicons.org/wordpress/FFFFFF",
  },
  {
    name: "WooCommerce",
    category: "E-commerces & Plataformas de Venda",
    icon: "https://cdn.simpleicons.org/woo/FFFFFF",
  },
  {
    name: "Shopify",
    category: "E-commerces & Plataformas de Venda",
    icon: "https://cdn.simpleicons.org/shopify/FFFFFF",
  },
  {
    name: "Elementor",
    category: "E-commerces & Plataformas de Venda",
    icon: "https://cdn.simpleicons.org/elementor/FFFFFF",
  },

  // Payment
  {
    name: "Stripe",
    category: "Pagamentos & Assinaturas",
    icon: "https://cdn.simpleicons.org/stripe/FFFFFF",
  },
  {
    name: "Mercado Pago",
    category: "Pagamentos & Assinaturas",
    icon: "https://cdn.simpleicons.org/mercadopago/FFFFFF",
  },
  {
    name: "PayPal",
    category: "Pagamentos & Assinaturas",
    icon: "https://cdn.simpleicons.org/paypal/FFFFFF",
  },
];

const categories = [
  {
    name: "Automação & IA",
    items: [
      "OpenAI",
      "Anthropic Claude",
      "WhatsApp",
      "n8n",
      "Make",
      "Zapier",
      "ManyChat",
    ],
  },
  {
    name: "Websites & Aplicações Web",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "Google Cloud",
    ],
  },
  {
    name: "E-commerces & Plataformas de Venda",
    items: ["WordPress", "WooCommerce", "Shopify", "Elementor"],
  },
  {
    name: "Pagamentos & Assinaturas",
    items: ["Stripe", "Mercado Pago", "PayPal"],
  },
];

function InfiniteCarousel({ items }: { items: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset quando chegar no meio (onde começa a duplicata)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pausar no hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const techs = items.map((name) =>
    technologies.find((t) => t.name === name)
  );

  // Duplicar os itens para criar efeito infinito
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden py-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {duplicatedTechs.map((tech, index) =>
          tech ? (
            <div
              key={`${tech.name}-${index}`}
              className="group relative flex flex-col items-center gap-3 flex-shrink-0"
            >
              {/* Card com fundo preto */}
              <div className="relative p-6 rounded-2xl bg-black border border-border/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 w-[120px] h-[120px] flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <span className="text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Tecnologias de Ponta
          </h2>
          <p className="text-lg text-muted-foreground">
            Stack completa para desenvolvimento web e automação de processos
            empresariais
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 text-center">
                {category.name}
              </h3>

              <InfiniteCarousel items={category.items} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Combinamos as melhores ferramentas para criar soluções robustas e
            escaláveis
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              ✓ Alta Performance
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              ✓ Segurança Garantida
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              ✓ 100% Escalável
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
