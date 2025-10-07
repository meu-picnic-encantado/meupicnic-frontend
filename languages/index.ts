import { ptBR } from './pt-BR';
import { enCA } from './en-CA';

export type Language = 'pt-BR' | 'en-CA';

export const languages = {
  'pt-BR': ptBR,
  'en-CA': enCA,
};

export { ptBR, enCA };
