'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sunrise, Sun, Sunset, Moon } from 'lucide-react';
import { useI18n } from '@/src/providers/LanguageProvider';

const horarios = [
  {
    id: 1,
    categoria: 'Café da Manhã',
    icon: Sunrise,
    opcoes: [
      { horario: '5:00h – 7:00h', descricao: 'O amanhecer perfeito para quem busca começar cedo' },
      { horario: '7:00h – 9:00h', descricao: 'Aproveite a calmaria da manhã em um momento especial' },
      { horario: '8:00h – 10:00h', descricao: 'Ideal para quem deseja um café da manhã mais relaxado e aconchegante' },
    ],
  },
  {
    id: 2,
    categoria: 'Café da Tarde – Pôr do Sol',
    icon: Sunset,
    opcoes: [
      { horario: '16:00h – 18:00h', descricao: 'Um momento mágico para relaxar e aproveitar' },
      { horario: '17:00h – 19:00h', descricao: 'Acompanhe os tons dourados do fim do dia em um cenário inesquecível' },
    ],
  },
  {
    id: 3,
    categoria: 'Noturno',
    icon: Moon,
    opcoes: [
      { horario: '19:00h – 21:00h', descricao: 'O início da noite com charme e tranquilidade' },
      { horario: '21:00h – 23:00h', descricao: 'Uma experiência noturna perfeita para encerrar o dia com beleza e elegância' },
    ],
  },
];

export default function ProdutosPage() {
  const { messages } = useI18n();
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(91, 138, 138, 0.5), rgba(167, 196, 188, 0.5)), url(https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            {messages.products.title}
          </h1>
          <p className="text-xl md:text-2xl text-balance max-w-2xl mx-auto">
            {messages.products.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FBF7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#5B8A8A] text-4xl font-bold mb-4">
              {messages.products.available}
            </h2>
            <p className="text-[#2C3E50] text-lg max-w-2xl mx-auto">
              Oferecemos horários flexíveis para atender suas necessidades e criar o momento perfeito
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {horarios.map((periodo) => {
              const IconComponent = periodo.icon;
              return (
                <Card
                  key={periodo.id}
                  className="border-none shadow-lg bg-white overflow-hidden"
                >
                  <CardHeader className="bg-[#A7C4BC]/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#5B8A8A] rounded-full flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-[#5B8A8A] text-3xl">
                        {periodo.categoria}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {periodo.opcoes.map((opcao, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-[#FBF7F0] rounded-lg"
                        >
                          <div className="sm:w-40 flex-shrink-0">
                            <span className="text-[#5B8A8A] font-bold text-lg">
                              {opcao.horario}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-[#2C3E50]">
                              {opcao.descricao}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#A7C4BC]/20 rounded-full mb-6">
              <Sun className="w-10 h-10 text-[#5B8A8A]" />
            </div>
            <h2 className="text-[#5B8A8A] text-4xl font-bold mb-6">
              {messages.products.included}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-[#FBF7F0] rounded-lg">
                <h3 className="text-[#5B8A8A] font-bold text-xl mb-3">
                  Estrutura Completa
                </h3>
                <ul className="space-y-2 text-[#2C3E50]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Tenda decorativa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Tapetes e almofadas confortáveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Mesa decorativa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Louças e utensílios</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#FBF7F0] rounded-lg">
                <h3 className="text-[#5B8A8A] font-bold text-xl mb-3">
                  Decoração
                </h3>
                <ul className="space-y-2 text-[#2C3E50]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Flores artificiais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Itens decorativos temáticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Iluminação (para eventos noturnos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Personalização sob consulta</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#FBF7F0] rounded-lg">
                <h3 className="text-[#5B8A8A] font-bold text-xl mb-3">
                  Serviços
                </h3>
                <ul className="space-y-2 text-[#2C3E50]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Montagem completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Desmontagem após o evento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Consultoria para escolha do local</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">✓</span>
                    <span>Atendimento personalizado</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[#FBF7F0] rounded-lg">
                <h3 className="text-[#5B8A8A] font-bold text-xl mb-3">
                  Extras Disponíveis
                </h3>
                <ul className="space-y-2 text-[#2C3E50]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">+</span>
                    <span>Cesta de alimentos gourmet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">+</span>
                    <span>Serviço de fotografia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">+</span>
                    <span>Decoração temática especial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A7C4BC] mt-1">+</span>
                    <span>Playlist personalizada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#A7C4BC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-4xl font-bold mb-6">
            {messages.products.readyToBook}
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar juntos o momento perfeito para você
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#5B8A8A] hover:bg-[#FBF7F0] text-lg px-12"
          >
            <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
              {messages.cta.contactUs}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
