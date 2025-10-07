'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { X } from 'lucide-react';

const imagens = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Piquenique Clássico',
    categoria: 'Básico',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Tarde ao Ar Livre',
    categoria: 'Básico',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Decoração Elegante',
    categoria: 'Personalizado',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Mesa Decorada',
    categoria: 'Básico',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/6069101/pexels-photo-6069101.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Piquenique Indoor',
    categoria: 'Indoor',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Café da Manhã',
    categoria: 'Básico',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Momento Romântico',
    categoria: 'Noturno',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Detalhes Especiais',
    categoria: 'Personalizado',
  },
  {
    id: 9,
    url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
    titulo: 'Pôr do Sol',
    categoria: 'Noturno',
  },
];

export default function GaleriaPage() {
  const [imagemSelecionada, setImagemSelecionada] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<string>('Todos');

  const categorias = ['Todos', 'Básico', 'Indoor', 'Noturno', 'Personalizado'];

  const imagensFiltradas = filtro === 'Todos'
    ? imagens
    : imagens.filter(img => img.categoria === filtro);

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(91, 138, 138, 0.5), rgba(167, 196, 188, 0.5)), url(https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Galeria
          </h1>
          <p className="text-xl md:text-2xl text-balance max-w-2xl mx-auto">
            Veja nossos momentos encantados
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FBF7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#5B8A8A] text-4xl font-bold mb-6">
              Nossos Trabalhos
            </h2>
            <p className="text-[#2C3E50] text-lg mb-8 max-w-2xl mx-auto">
              Cada foto conta uma história única de momentos especiais criados com carinho
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categorias.map((categoria) => (
                <Button
                  key={categoria}
                  onClick={() => setFiltro(categoria)}
                  variant={filtro === categoria ? 'default' : 'outline'}
                  className={
                    filtro === categoria
                      ? 'bg-[#5B8A8A] hover:bg-[#5B8A8A]/90 text-white'
                      : 'border-[#5B8A8A] text-[#5B8A8A] hover:bg-[#5B8A8A]/10'
                  }
                >
                  {categoria}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagensFiltradas.map((imagem) => (
              <div
                key={imagem.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setImagemSelecionada(imagem.id)}
              >
                <img
                  src={imagem.url}
                  alt={imagem.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B8A8A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{imagem.titulo}</h3>
                    <p className="text-sm text-white/90">{imagem.categoria}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {imagemSelecionada !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setImagemSelecionada(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#A7C4BC] transition-colors"
            onClick={() => setImagemSelecionada(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative">
            <img
              src={imagens.find(img => img.id === imagemSelecionada)?.url}
              alt={imagens.find(img => img.id === imagemSelecionada)?.titulo}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#5B8A8A] text-4xl font-bold mb-6">
            Quer fazer parte da nossa galeria?
          </h2>
          <p className="text-[#2C3E50] text-xl mb-8 max-w-2xl mx-auto">
            Reserve seu piquenique e crie memórias inesquecíveis que ficarão para sempre
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#A7C4BC] hover:bg-[#5B8A8A] text-white text-lg px-12"
          >
            <a href="https://wa.me/5547992459014" target="_blank" rel="noopener noreferrer">
              Fazer Reserva
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
