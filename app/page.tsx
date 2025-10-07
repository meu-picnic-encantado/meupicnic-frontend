'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MapPin, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(91, 138, 138, 0.3), rgba(167, 196, 188, 0.3)), url(https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            A arte de encantar momentos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-balance">
            Transforme qualquer ocasião em uma experiência única e inesquecível
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white text-lg px-8"
            >
              <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                Fale com a gente
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/90 hover:bg-white text-[#5B8A8A] text-lg px-8 border-none"
            >
              <Link href="/eventos">Ver Opções</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#5B8A8A] text-4xl md:text-5xl font-bold mb-6 text-balance">
                Meu Picnic Encantado
              </h2>
              <p className="text-[#2C3E50] text-lg leading-relaxed mb-6">
                Transforme qualquer ocasião em uma experiência única e inesquecível. Aqui, cada detalhe é pensado com carinho para criar momentos de puro encanto. De piqueniques românticos a celebrações especiais, nossa missão é proporcionar a você o prazer de vivenciar a magia ao ar livre, com todo o conforto e beleza que você merece.
              </p>
              <p className="text-[#2C3E50] text-lg leading-relaxed">
                Descubra as opções perfeitas para o seu dia e permita-nos criar memórias incríveis para você e seus convidados!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Picnic 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Picnic 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden -mt-8">
                <img
                  src="https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Picnic 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Picnic 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FBF7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#5B8A8A] text-4xl md:text-5xl font-bold mb-4">
              Por que escolher a gente?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#5B8A8A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  Feito com Carinho
                </h3>
                <p className="text-[#2C3E50]/80">
                  Cada detalhe pensado para criar momentos especiais
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#5B8A8A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  Onde Você Quiser
                </h3>
                <p className="text-[#2C3E50]/80">
                  Praias, parques ou no conforto da sua casa
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#5B8A8A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  Horários Flexíveis
                </h3>
                <p className="text-[#2C3E50]/80">
                  Do amanhecer ao pôr do sol, e até à noite
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#5B8A8A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  Personalização
                </h3>
                <p className="text-[#2C3E50]/80">
                  Adaptamos tudo ao seu estilo e ocasião
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#5B8A8A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#A7C4BC] text-sm font-bold mb-2 uppercase tracking-wider">
                O início de um sonho
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                A história da nossa empresa começou em 2023
              </h3>
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <p>
                Nas margens do Lake Ontario, em Toronto, Canadá. Inspirados pela beleza dos parques e pela paixão por criar experiências inesquecíveis ao ar livre, um casal apaixonado por tempo de qualidade decidiu transformar um simples piquenique em um evento especial. Foi assim que nasceu o Meu Picnic Encantado, uma empresa dedicada a oferecer momentos únicos em meio à natureza, com conforto, elegância e um toque personalizado.
              </p>

              <p>
                Nosso conceito é simples, mas cheio de significado: unir pessoas em torno de uma experiência que celebra a conexão com a natureza e com aqueles que amamos. Desde o início, cuidamos de cada detalhe, desde a escolha das cestas e mantas, até a seleção dos melhores ingredientes e locais.
              </p>

              <h4 className="text-2xl font-bold mt-12 mb-4">Nossa História</h4>

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#5B8A8A] text-4xl md:text-5xl font-bold mb-6">
            Pronto para criar seu momento inesquecível?
          </h2>
          <p className="text-[#2C3E50] text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos planejar juntos o seu picnic dos sonhos
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white text-lg px-12"
          >
            <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
              Fale com a gente
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
