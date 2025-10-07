'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Moon, Home as HomeIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-[#F5E6D3] via-[#FFF8E7] to-[#F0E68C] py-20 md:py-32">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#8B4513] mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-[#2F4F2F] mb-6 font-light">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-[#556B2F] mb-8 leading-relaxed max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#8B4513] hover:bg-[#A0522D] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                {t.hero.cta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-4">
            {t.events.title}
          </h2>
          <p className="text-center text-[#556B2F] text-lg mb-12 max-w-2xl mx-auto">
            {t.events.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="border-2 border-[#D2B48C] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                    <HomeIcon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-3 text-center">
                  {t.events.basic.title}
                </h3>
                <p className="text-[#2F4F2F] leading-relaxed text-center">
                  {t.events.basic.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                    <HomeIcon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-3 text-center">
                  {t.events.indoor.title}
                </h3>
                <p className="text-[#2F4F2F] leading-relaxed text-center">
                  {t.events.indoor.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                    <Moon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-3 text-center">
                  {t.events.night.title}
                </h3>
                <p className="text-[#2F4F2F] leading-relaxed text-center">
                  {t.events.night.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#8B4513]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-3 text-center">
                  {t.events.custom.title}
                </h3>
                <p className="text-[#2F4F2F] leading-relaxed text-center">
                  {t.events.custom.description}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
            >
              <Link href="/eventos">
                {t.nav.events}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5E6D3] to-[#FFF8E7]">
        <div className="container px-4 md:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-12">
            {t.schedule.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-[#D2B48C] bg-white/80">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center">
                    <Sun className="w-8 h-8 text-[#F4A460]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                  {t.schedule.breakfast}
                </h3>
                <div className="space-y-2 text-[#2F4F2F] text-center">
                  <p>5:00h – 7:00h</p>
                  <p>7:00h – 9:00h</p>
                  <p>8:00h – 10:00h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] bg-white/80">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center">
                    <Sun className="w-8 h-8 text-[#FF8C00]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                  {t.schedule.afternoon}
                </h3>
                <div className="space-y-2 text-[#2F4F2F] text-center">
                  <p>16:00h – 18:00h</p>
                  <p>17:00h – 19:00h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D2B48C] bg-white/80">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] flex items-center justify-center">
                    <Moon className="w-8 h-8 text-[#4B0082]" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-[#8B4513] mb-4 text-center">
                  {t.schedule.night}
                </h3>
                <div className="space-y-2 text-[#2F4F2F] text-center">
                  <p>19:00h – 21:00h</p>
                  <p>21:00h – 23:00h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#8B4513] mb-8">
              {t.about.dream}
            </h2>
            <p className="text-xl text-[#8B4513] mb-6 font-semibold">
              {t.about.dreamYear}
            </p>
            <p className="text-lg text-[#2F4F2F] leading-relaxed mb-8">
              {t.about.dreamDescription}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
            >
              <Link href="/nossa-historia">
                {t.nav.about}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
