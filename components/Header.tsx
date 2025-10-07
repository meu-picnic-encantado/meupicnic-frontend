'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useI18n } from '@/src/providers/LanguageProvider';

export function Header() {
  const { messages, locale, setLocale } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF7F0]/95 backdrop-blur-sm border-b border-[#A7C4BC]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Meu Picnic Encantado" width={48} height={48} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-[#5B8A8A] font-bold text-lg leading-none">{messages.brand.name1}</span>
              <span className="text-[#A7C4BC] text-sm leading-none">{messages.brand.name2}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              {messages.nav.home}
            </Link>
            <Link href="/eventos" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              {messages.nav.events}
            </Link>
            <Link href="/produtos" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              {messages.nav.products}
            </Link>
            <Link href="/galeria" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              {messages.nav.gallery}
            </Link>
            <Link href="/sobre" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              {messages.nav.about}
            </Link>

            <div className="flex items-center gap-2">
              <button
                aria-label="Português (Brasil)"
                onClick={() => setLocale('pt-BR')}
                className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${locale==='pt-BR' ? 'ring-[#5B8A8A]' : 'ring-transparent'}`}
                title="Português (Brasil)"
              >
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://flagcdn.com/w40/br.png" alt="BR" className="w-full h-full object-cover" />
                </span>
              </button>
              <button
                aria-label="English (Canada)"
                onClick={() => setLocale('en-CA')}
                className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${locale==='en-CA' ? 'ring-[#5B8A8A]' : 'ring-transparent'}`}
                title="English (Canada)"
              >
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://flagcdn.com/w40/ca.png" alt="CA" className="w-full h-full object-cover" />
                </span>
              </button>
            </div>
            <Button
              asChild
              className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white"
            >
              <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                {messages.cta.contactUs}
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden text-[#5B8A8A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#A7C4BC]/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {messages.nav.home}
              </Link>
              <Link
                href="/eventos"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {messages.nav.events}
              </Link>
              <Link
                href="/produtos"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {messages.nav.products}
              </Link>
              <Link
                href="/galeria"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {messages.nav.gallery}
              </Link>
              <Link
                href="/sobre"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {messages.nav.about}
              </Link>
              <Button
                asChild
                className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white w-full"
              >
                <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                  {messages.cta.contactUs}
                </a>
              </Button>
              <div className="flex items-center gap-3 pt-2">
                <button
                  aria-label="Português (Brasil)"
                  onClick={() => setLocale('pt-BR')}
                  className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${locale==='pt-BR' ? 'ring-[#5B8A8A]' : 'ring-transparent'}`}
                  title="Português (Brasil)"
                >
                  <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://flagcdn.com/w40/br.png" alt="BR" className="w-full h-full object-cover" />
                  </span>
                </button>
                <button
                  aria-label="English (Canada)"
                  onClick={() => setLocale('en-CA')}
                  className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ${locale==='en-CA' ? 'ring-[#5B8A8A]' : 'ring-transparent'}`}
                  title="English (Canada)"
                >
                  <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://flagcdn.com/w40/ca.png" alt="CA" className="w-full h-full object-cover" />
                  </span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
