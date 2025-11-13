'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, Globe } from 'lucide-react';
import { CircleFlagsBr } from '@/components/icons/CircleFlagsBr';
import { CircleFlagsCa } from '@/components/icons/CircleFlagsCa';

export default function NossaHistoriaPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#e8f2f7] via-[#f0f7fb] to-[#a8d4f0] py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#3b7aa4] mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-[#1a3a4a] leading-relaxed">
              {t.about.dreamYear}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-[#5a9bc4] shadow-xl mb-12">
              <CardContent className="pt-10 pb-10 px-6 md:px-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e8f2f7] to-[#5a9bc4] flex items-center justify-center">
                    <Heart className="w-10 h-10 text-[#3b7aa4]" />
                  </div>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#3b7aa4] mb-6 text-center">
                  {t.about.dream}
                </h2>
                <p className="text-lg text-[#1a3a4a] leading-relaxed mb-6 text-center">
                  {t.about.dreamDescription}
                </p>
                <p className="text-lg text-[#1a3a4a] leading-relaxed text-center">
                  {t.about.concept}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#5a9bc4] shadow-xl mb-12">
              <CardContent className="pt-10 pb-10 px-6 md:px-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e8f2f7] to-[#5a9bc4] flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-[#3b7aa4]" />
                  </div>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#3b7aa4] mb-6 text-center">
                  {t.about.history}
                </h2>
                <p className="text-lg text-[#1a3a4a] leading-relaxed mb-6 text-center">
                  {t.about.historyDescription1}
                </p>
                <p className="text-lg text-[#1a3a4a] leading-relaxed text-center">
                  {t.about.historyDescription2}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#5a9bc4] shadow-xl bg-gradient-to-br from-[#e8f2f7] to-[#f0f7fb]">
              <CardContent className="pt-10 pb-10 px-6 md:px-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <Globe className="w-10 h-10 text-[#3b7aa4]" />
                  </div>
                </div>
                <p className="text-lg text-[#1a3a4a] leading-relaxed text-center font-medium">
                  {t.about.today}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#e8f2f7] to-[#f0f7fb]">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#3b7aa4] mb-8 text-center">
              {t.footer.locations}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#5a9bc4] bg-white/90 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CircleFlagsCa width={50} height={50} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-[#3b7aa4] mb-3">
                    Toronto, Canada
                  </h3>
                  <p className="text-[#1a3a4a] leading-relaxed">
                    Lake Ontario
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5a9bc4] bg-white/90 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CircleFlagsBr width={50} height={50} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-[#3b7aa4] mb-3">
                    Itajaí, Brasil
                  </h3>
                  <p className="text-[#1a3a4a] leading-relaxed">
                    Santa Catarina
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#3b7aa4] mb-6">
            {t.hero.cta}
          </h2>
          <p className="text-lg text-[#1a3a4a] mb-8 max-w-2xl mx-auto">
            {t.contact.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#3b7aa4] hover:bg-[#2a5a7a] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                {t.contact.whatsapp}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#3b7aa4] text-[#3b7aa4] hover:bg-[#3b7aa4] hover:text-white px-8 py-6 rounded-full"
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
        </div>
      </section>
    </div>
  );
}
