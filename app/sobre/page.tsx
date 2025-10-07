'use client';

import { useI18n } from '@/src/providers/LanguageProvider';

export default function SobrePage() {
  const { messages } = useI18n();
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(91, 138, 138, 0.5), rgba(167, 196, 188, 0.5)), url(https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{messages.nav.about}</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#A7C4BC] text-sm font-bold mb-2 uppercase tracking-wider">
                {messages.about.highlight}
              </h2>
              <h3 className="text-[#5B8A8A] text-4xl md:text-5xl font-bold mb-8">
                {messages.about.title}
              </h3>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-[#2C3E50]">
              <p>
                Nas margens do Lake Ontario, em Toronto, Canadá. Inspirados pela beleza dos parques e pela paixão por criar experiências inesquecíveis ao ar livre, um casal apaixonado por tempo de qualidade decidiu transformar um simples piquenique em um evento especial. Foi assim que nasceu o Meu Picnic Encantado, uma empresa dedicada a oferecer momentos únicos em meio à natureza, com conforto, elegância e um toque personalizado.
              </p>
              <p>
                Nosso conceito é simples, mas cheio de significado: unir pessoas em torno de uma experiência que celebra a conexão com a natureza e com aqueles que amamos. Desde o início, cuidamos de cada detalhe, desde a escolha das cestas e mantas, até a seleção dos melhores ingredientes e locais.
              </p>
              <h4 className="text-2xl font-bold mt-10">Nossa História</h4>
              <p>
                Com o tempo, nosso compromisso com qualidade e inovação conquistou o coração dos canadenses. Logo, o Meu Picnic Encantado tornou-se referência em eventos ao ar livre, ampliando sua atuação para atender não apenas encontros casuais, mas também celebrações especiais como aniversários, pedidos de casamento e reuniões corporativas, além de atender também no conforto da sua casa.
              </p>
              <p>
                Em 2025, decidimos expandir nossas fronteiras e trazer esse conceito único para o Brasil. Escolhemos a cidade de Itajaí, em Santa Catarina, por sua conexão com a natureza, suas belas praias e pelo espírito acolhedor da comunidade. A filial brasileira do Meu Picnic Encantado mantém os mesmos padrões de qualidade, mas agora com um toque tropical, valorizando a cultura e os sabores locais.
              </p>
              <p className="text-xl font-semibold">
                Hoje, temos orgulho de oferecer experiências que unem tradição e inovação, no Canadá e no Brasil, com o mesmo objetivo: criar momentos inesquecíveis, cercados de beleza, carinho e simplicidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

