'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tent, Home, Moon, Sparkles } from 'lucide-react';

const eventos = [
  {
    id: 1,
    titulo: 'Piquenique Básico',
    descricao: 'Uma opção charmosa e aconchegante que inclui uma tenda, tapetes, almofadas, itens decorativos e um toque de elegância com flores artificiais. Ideal para momentos especiais ao ar livre.',
    icon: Tent,
    imagem: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Popular',
  },
  {
    id: 2,
    titulo: 'Piquenique Indoor',
    descricao: 'Perfeito para dias chuvosos ou espaços internos. Essa opção adapta o charme do piquenique para dentro de casa, com a mesma atenção aos detalhes e conforto.',
    icon: Home,
    imagem: 'https://images.pexels.com/photos/6069101/pexels-photo-6069101.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Conforto',
  },
  {
    id: 3,
    titulo: 'Piquenique Noturno',
    descricao: 'Uma experiência mágica para aproveitar sob as estrelas. Seja na praia, em um parque ou em um local especial, essa opção é ideal para quem busca um cenário único e encantador à noite.',
    icon: Moon,
    imagem: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Romântico',
  },
  {
    id: 4,
    titulo: 'Piquenique Personalizado',
    descricao: 'Para quem deseja algo exclusivo e feito sob medida. Personalize cada detalhe, desde o local até a decoração, para criar uma experiência que reflita sua personalidade e estilo.',
    icon: Sparkles,
    imagem: 'https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Exclusivo',
  },
];

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(91, 138, 138, 0.5), rgba(167, 196, 188, 0.5)), url(https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Nossos Eventos
          </h1>
          <p className="text-xl md:text-2xl text-balance max-w-2xl mx-auto">
            Escolha o piquenique perfeito para você
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FBF7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#5B8A8A] text-4xl font-bold mb-4">
              Tipos de Piquenique
            </h2>
            <p className="text-[#2C3E50] text-lg max-w-2xl mx-auto">
              Cada opção é cuidadosamente planejada para criar a experiência perfeita para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eventos.map((evento) => {
              const IconComponent = evento.icon;
              return (
                <Card
                  key={evento.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={evento.imagem}
                      alt={evento.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#A7C4BC] text-white border-none">
                        {evento.badge}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-[#A7C4BC]/20 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#5B8A8A]" />
                      </div>
                      <CardTitle className="text-[#5B8A8A] text-2xl">
                        {evento.titulo}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-[#2C3E50] text-base leading-relaxed">
                      {evento.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      className="w-full bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white"
                    >
                      <a
                        href={`https://wa.me/5547992459014?text=Olá! Gostaria de saber mais sobre o ${evento.titulo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Saiba Mais
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#5B8A8A] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-xl mb-8">
              Podemos criar algo exclusivo e personalizado especialmente para você!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#5B8A8A] hover:bg-[#FBF7F0] text-lg px-12"
            >
              <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
                Entre em Contato
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
