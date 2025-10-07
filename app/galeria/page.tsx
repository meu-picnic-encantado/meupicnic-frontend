'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';

export default function GaleriaPage() {
  const { language, t } = useLanguage();

  const galleryItems = [
    {
      category: language === 'pt-BR' ? 'Piqueniques Românticos' : 'Romantic Picnics',
      description:
        language === 'pt-BR'
          ? 'Momentos especiais criados para casais que buscam uma experiência inesquecível.'
          : 'Special moments created for couples seeking an unforgettable experience.',
    },
    {
      category: language === 'pt-BR' ? 'Celebrações ao Ar Livre' : 'Outdoor Celebrations',
      description:
        language === 'pt-BR'
          ? 'Aniversários, despedidas e festas em meio à natureza com toda elegância.'
          : 'Birthdays, farewells and parties in nature with all elegance.',
    },
    {
      category: language === 'pt-BR' ? 'Piqueniques Noturnos' : 'Night Picnics',
      description:
        language === 'pt-BR'
          ? 'Experiências mágicas sob o céu estrelado, perfeitas para ocasiões especiais.'
          : 'Magical experiences under the starry sky, perfect for special occasions.',
    },
    {
      category: language === 'pt-BR' ? 'Eventos Corporativos' : 'Corporate Events',
      description:
        language === 'pt-BR'
          ? 'Reuniões e eventos empresariais em ambientes relaxantes e inspiradores.'
          : 'Meetings and corporate events in relaxing and inspiring environments.',
    },
    {
      category: language === 'pt-BR' ? 'Piqueniques em Família' : 'Family Picnics',
      description:
        language === 'pt-BR'
          ? 'Momentos de alegria e união familiar em cenários encantadores.'
          : 'Moments of joy and family unity in charming settings.',
    },
    {
      category: language === 'pt-BR' ? 'Sessões Fotográficas' : 'Photo Sessions',
      description:
        language === 'pt-BR'
          ? 'Cenários perfeitos para ensaios fotográficos e registros especiais.'
          : 'Perfect settings for photo shoots and special records.',
    },
    {
      category: language === 'pt-BR' ? 'Pedidos de Casamento' : 'Marriage Proposals',
      description:
        language === 'pt-BR'
          ? 'O cenário perfeito para o momento mais importante da sua vida.'
          : 'The perfect setting for the most important moment of your life.',
    },
    {
      category: language === 'pt-BR' ? 'Piqueniques na Praia' : 'Beach Picnics',
      description:
        language === 'pt-BR'
          ? 'Experiências únicas à beira-mar com todo conforto e sofisticação.'
          : 'Unique seaside experiences with all comfort and sophistication.',
    },
    {
      category: language === 'pt-BR' ? 'Piqueniques Indoor' : 'Indoor Picnics',
      description:
        language === 'pt-BR'
          ? 'Conforto e charme dentro de casa para dias especiais em qualquer clima.'
          : 'Comfort and charm indoors for special days in any weather.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#F5E6D3] via-[#FFF8E7] to-[#F0E68C] py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#8B4513] mb-6">
              {t.nav.gallery}
            </h1>
            <p className="text-xl text-[#2F4F2F] leading-relaxed">
              {language === 'pt-BR'
                ? 'Explore nossa coleção de momentos especiais e inspire-se para criar o seu próprio evento encantado.'
                : 'Explore our collection of special moments and get inspired to create your own enchanted event.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-[#D2B48C] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#F5E6D3] to-[#D2B48C] flex items-center justify-center">
                  <ImageIcon className="w-20 h-20 text-[#8B4513] opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="font-playfair text-2xl font-semibold text-white">
                        {item.category}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6 pb-6">
                  <p className="text-[#2F4F2F] leading-relaxed text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F5E6D3] to-[#FFF8E7]">
        <div className="container px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
            {language === 'pt-BR' ? 'Visite Nossas Redes Sociais' : 'Visit Our Social Media'}
          </h2>
          <p className="text-lg text-[#2F4F2F] mb-8 max-w-2xl mx-auto">
            {language === 'pt-BR'
              ? 'Siga-nos no Instagram para ver mais fotos e vídeos dos nossos eventos!'
              : 'Follow us on Instagram to see more photos and videos of our events!'}
          </p>
          <a
            href="https://www.instagram.com/meupicnicencantado/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t.contact.instagram}
          </a>
        </div>
      </section>
    </div>
  );
}
