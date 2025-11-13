'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CircleFlagsBr } from '@/components/icons/CircleFlagsBr';
import { CircleFlagsCa } from '@/components/icons/CircleFlagsCa';
import { MaterialSymbolsMenuRounded } from '@/components/icons/MaterialSymbolsMenuRounded';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8 relative">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="https://raw.githubusercontent.com/s4nts/Meu-Picnic-Encantado/refs/heads/main/logo.png"
            alt="Meu Picnic Encantado"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <span className="hidden md:inline-block text-xl font-semibold text-[#3b7aa4]">
            {language === 'pt-BR' ? 'Meu Picnic Encantado' : 'My Enchanted Picnic'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium">
            {t.nav.home}
          </Link>
          <Link href="/eventos" className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium">
            {t.nav.events}
          </Link>
          <Link href="/produtos" className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium">
            {t.nav.products}
          </Link>
          <Link href="/galeria" className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium">
            {t.nav.gallery}
          </Link>
          <Link href="/nossa-historia" className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium">
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center md:space-x-3 w-full md:w-auto justify-between md:justify-end">
          {/* Botões de idioma - centralizados no mobile */}
          <div className="flex items-center justify-center space-x-1 md:space-x-3 mx-auto md:mx-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('pt-BR')}
              className="h-12 w-12 md:h-10 md:w-10 p-0 flex items-center justify-center"
              title="Português"
            >
              <div className="w-6 h-6 md:w-[19px] md:h-[19px]">
                <CircleFlagsBr width="100%" height="100%" />
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('en-CA')}
              className="h-12 w-12 md:h-10 md:w-10 p-0 flex items-center justify-center"
              title="English"
            >
              <div className="w-6 h-6 md:w-[19px] md:h-[19px]">
                <CircleFlagsCa width="100%" height="100%" />
              </div>
            </Button>
          </div>

          {/* Menu hambúrguer para mobile - alinhado à direita */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-14 w-14 p-0 flex items-center justify-center text-[#1a3a4a] hover:text-[#3b7aa4]"
                aria-label="Menu"
              >
                <MaterialSymbolsMenuRounded width={57} height={57} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-[#3b7aa4]">
                  {language === 'pt-BR' ? 'Menu' : 'Menu'}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium text-lg"
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/eventos"
                  className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium text-lg"
                >
                  {t.nav.events}
                </Link>
                <Link
                  href="/produtos"
                  className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium text-lg"
                >
                  {t.nav.products}
                </Link>
                <Link
                  href="/galeria"
                  className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium text-lg"
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  href="/nossa-historia"
                  className="text-[#1a3a4a] hover:text-[#3b7aa4] transition-colors font-medium text-lg"
                >
                  {t.nav.about}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
