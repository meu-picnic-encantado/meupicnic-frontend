'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Tent, Utensils, Flower2, Camera, Music } from 'lucide-react';

export default function ProdutosPage() {
  const { t, language } = useLanguage();

  const products = [
    {
      icon: Tent,
      name: language === 'pt-BR' ? 'Tendas & Decoração' : 'Tents & Decoration',
      description:
        language === 'pt-BR'
          ? 'Tendas elegantes, tapetes confortáveis e decoração personalizada para criar o ambiente perfeito.'
          : 'Elegant tents, comfortable rugs, and personalized decoration to create the perfect atmosphere.',
    },
    {
      icon: Utensils,
      name: language === 'pt-BR' ? 'Cestas Gourmet' : 'Gourmet Baskets',
      description:
        language === 'pt-BR'
          ? 'Cestas preparadas com produtos selecionados e opções personalizadas de acordo com seu gosto.'
          : 'Baskets prepared with selected products and customized options according to your taste.',
    },
    {
      icon: Flower2,
      name: language === 'pt-BR' ? 'Arranjos Florais' : 'Floral Arrangements',
      description:
        language === 'pt-BR'
          ? 'Flores artificiais de alta qualidade que trazem beleza e sofisticação ao seu evento.'
          : 'High-quality artificial flowers that bring beauty and sophistication to your event.',
    },
    {
      icon: Camera,
      name: language === 'pt-BR' ? 'Registro Fotográfico' : 'Photo Coverage',
      description:
        language === 'pt-BR'
          ? 'Capture os momentos especiais do seu piquenique com nosso serviço de fotografia profissional.'
          : 'Capture the special moments of your picnic with our professional photography service.',
    },
    {
      icon: Music,
      name: language === 'pt-BR' ? 'Ambiente Musical' : 'Musical Atmosphere',
      description:
        language === 'pt-BR'
          ? 'Sistema de som portátil para criar a trilha sonora perfeita para o seu momento especial.'
          : 'Portable sound system to create the perfect soundtrack for your special moment.',
    },
    {
      icon: Package,
      name: language === 'pt-BR' ? 'Pacotes Completos' : 'Complete Packages',
      description:
        language === 'pt-BR'
          ? 'Soluções completas que incluem todos os itens necessários para uma experiência inesquecível.'
          : 'Complete solutions that include all items needed for an unforgettable experience.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#F5E6D3] via-[#FFF8E7] to-[#F0E68C] py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#8B4513] mb-6">
              {t.nav.products}
            </h1>
            <p className="text-xl text-[#2F4F2F] leading-relaxed">
              {language === 'pt-BR'
                ? 'Descubra nossos produtos e serviços cuidadosamente selecionados para tornar seu piquenique perfeito.'
                : 'Discover our carefully selected products and services to make your picnic perfect.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[#D2B48C] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F5E6D3] to-[#D2B48C] flex items-center justify-center">
                        <Icon className="w-10 h-10 text-[#8B4513]" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                      {product.name}
                    </h3>
                    <p className="text-[#2F4F2F] leading-relaxed text-center">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F5E6D3] to-[#FFF8E7]">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#D2B48C] bg-white/90">
              <CardContent className="pt-10 pb-10 px-8">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#8B4513] mb-6 text-center">
                  {language === 'pt-BR' ? 'Personalização Completa' : 'Complete Customization'}
                </h2>
                <p className="text-lg text-[#2F4F2F] leading-relaxed mb-8 text-center">
                  {language === 'pt-BR'
                    ? 'Todos os nossos produtos e serviços podem ser personalizados para atender suas necessidades específicas. Entre em contato conosco e vamos criar juntos a experiência perfeita para você.'
                    : 'All our products and services can be customized to meet your specific needs. Contact us and let\'s create the perfect experience for you together.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#8B4513] hover:bg-[#A0522D] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                      {t.contact.whatsapp}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white px-8 py-6 rounded-full"
                  >
                    <a
                      href="https://www.instagram.com/meupicnicencantado/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.contact.instagram}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
