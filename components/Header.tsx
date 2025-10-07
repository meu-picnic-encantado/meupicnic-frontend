'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF7F0]/95 backdrop-blur-sm border-b border-[#A7C4BC]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#5B8A8A] rounded-full flex items-center justify-center text-white font-semibold">
              MPE
            </div>
            <div className="flex flex-col">
              <span className="text-[#5B8A8A] font-bold text-lg leading-none">Meu Picnic</span>
              <span className="text-[#A7C4BC] text-sm leading-none">Encantado</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              Início
            </Link>
            <Link href="/eventos" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              Eventos
            </Link>
            <Link href="/produtos" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              Produtos
            </Link>
            <Link href="/galeria" className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium">
              Galeria
            </Link>
            <Button
              asChild
              className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white"
            >
              <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                Fale com a gente
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
                Início
              </Link>
              <Link
                href="/eventos"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="/produtos"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/galeria"
                className="text-[#2C3E50] hover:text-[#5B8A8A] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galeria
              </Link>
              <Button
                asChild
                className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white w-full"
              >
                <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                  Fale com a gente
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
