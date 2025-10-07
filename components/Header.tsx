'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="https://raw.githubusercontent.com/s4nts/Meu-Picnic-Encantado/refs/heads/main/logo.png"
            alt="Meu Picnic Encantado"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="hidden md:inline-block text-xl font-semibold text-[#8B4513]">
            {language === 'pt-BR' ? 'Meu Picnic Encantado' : 'My Enchanted Picnic'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#2F4F2F] hover:text-[#8B4513] transition-colors font-medium">
            {t.nav.home}
          </Link>
          <Link href="/eventos" className="text-[#2F4F2F] hover:text-[#8B4513] transition-colors font-medium">
            {t.nav.events}
          </Link>
          <Link href="/produtos" className="text-[#2F4F2F] hover:text-[#8B4513] transition-colors font-medium">
            {t.nav.products}
          </Link>
          <Link href="/galeria" className="text-[#2F4F2F] hover:text-[#8B4513] transition-colors font-medium">
            {t.nav.gallery}
          </Link>
          <Link href="/nossa-historia" className="text-[#2F4F2F] hover:text-[#8B4513] transition-colors font-medium">
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage('pt-BR')}
            className={`h-10 w-10 p-0 ${language === 'pt-BR' ? 'ring-2 ring-[#8B4513]' : ''}`}
            title="Português"
          >
            <span className="text-2xl">🇧🇷</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage('en-CA')}
            className={`h-10 w-10 p-0 ${language === 'en-CA' ? 'ring-2 ring-[#8B4513]' : ''}`}
            title="English"
          >
            <span className="text-2xl">🇨🇦</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
