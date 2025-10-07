'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Instagram, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t bg-[#F5E6D3] text-[#2F4F2F]">
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#8B4513]">{t.contact.title}</h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/5547992459014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#8B4513] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{t.contact.phone}</span>
              </a>
              <a
                href="https://www.instagram.com/meupicnicencantado/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#8B4513] transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>{t.contact.instagram}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#8B4513]">{t.nav.home}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-[#8B4513] transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/eventos" className="hover:text-[#8B4513] transition-colors">
                {t.nav.events}
              </Link>
              <Link href="/produtos" className="hover:text-[#8B4513] transition-colors">
                {t.nav.products}
              </Link>
              <Link href="/galeria" className="hover:text-[#8B4513] transition-colors">
                {t.nav.gallery}
              </Link>
              <Link href="/nossa-historia" className="hover:text-[#8B4513] transition-colors">
                {t.nav.about}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#8B4513]">{t.footer.locations}</h3>
            <p className="text-sm leading-relaxed">
              Toronto, Canada<br />
              Itajaí, Brasil
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#D2B48C] text-center text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
