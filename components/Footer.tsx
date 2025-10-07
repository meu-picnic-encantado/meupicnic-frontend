import { Instagram, Phone } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/src/providers/LanguageProvider';

export function Footer() {
  const { messages } = useI18n();
  return (
    <footer className="bg-[#A7C4BC] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Meu Picnic Encantado" width={40} height={40} className="rounded-full bg-white" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-base leading-none">{messages.brand.name1}</span>
                <span className="text-white/80 text-sm leading-none">{messages.brand.name2}</span>
              </div>
            </div>
            <p className="text-white/90 text-sm">
              Transforme qualquer ocasião em uma experiência única e inesquecível.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{messages.contact.title}</h3>
            <div className="space-y-2">
              <a
                href="tel:+5547992459014"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>(47) 99245-9014</span>
              </a>
              <a
                href="https://www.instagram.com/meupicnicencantado/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span>@meupicnicencantado</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{messages.contact.location}</h3>
            <p className="text-white/90 text-sm">
              {messages.contact.city}<br />
              {messages.contact.country}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} Meu Picnic Encantado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
