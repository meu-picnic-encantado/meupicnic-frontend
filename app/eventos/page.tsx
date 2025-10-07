'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Home as HomeIcon, Sparkles } from 'lucide-react';

export default function EventosPage() {
  const { t } = useLanguage();

  const events = [
    {
      title: t.events.basic.title,
      description: t.events.basic.description,
      icon: HomeIcon,
      color: 'bg-[#D2B48C]',
    },
    {
      title: t.events.indoor.title,
      description: t.events.indoor.description,
      icon: HomeIcon,
      color: 'bg-[#BDB76B]',
    },
    {
      title: t.events.night.title,
      description: t.events.night.description,
      icon: Moon,
      color: 'bg-[#8B7355]',
    },
    {
      title: t.events.custom.title,
      description: t.events.custom.description,
      icon: Sparkles,
      color: 'bg-[#DEB887]',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#F5E6D3] via-[#FFF8E7] to-[#F0E68C] py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#8B4513] mb-6">
              {t.events.title}
            </h1>
            <p className="text-xl text-[#2F4F2F] leading-relaxed">
              {t.events.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[#D2B48C] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 rounded-full ${event.color} flex items-center justify-center`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-3xl font-semibold text-[#8B4513] mb-4 text-center">
                      {event.title}
                    </h3>
                    <p className="text-[#2F4F2F] leading-relaxed text-center text-lg">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5E6D3] to-[#FFF8E7]">
        <div className="container px-4 md:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-12">
            {t.schedule.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-[#D2B48C] bg-white/90 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center">
                    <Sun className="w-8 h-8 text-[#F4A460]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                  {t.schedule.breakfast}
                </h3>
                <div className="space-y-3 text-[#2F4F2F] text-center text-lg">
                  <p className="font-medium">5:00h – 7:00h</p>
                  <p className="font-medium">7:00h – 9:00h</p>
                  <p className="font-medium">8:00h – 10:00h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] bg-white/90 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center">
                    <Sun className="w-8 h-8 text-[#FF8C00]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                  {t.schedule.afternoon}
                </h3>
                <div className="space-y-3 text-[#2F4F2F] text-center text-lg">
                  <p className="font-medium">16:00h – 18:00h</p>
                  <p className="font-medium">17:00h – 19:00h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] bg-white/90 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center">
                    <Moon className="w-8 h-8 text-[#4B0082]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                  {t.schedule.night}
                </h3>
                <div className="space-y-3 text-[#2F4F2F] text-center text-lg">
                  <p className="font-medium">19:00h – 21:00h</p>
                  <p className="font-medium">21:00h – 23:00h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
            {t.hero.cta}
          </h2>
          <p className="text-lg text-[#2F4F2F] mb-8 max-w-2xl mx-auto">
            {t.contact.title}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#8B4513] hover:bg-[#A0522D] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
              {t.contact.whatsapp}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
