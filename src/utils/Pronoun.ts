import { Word } from './Word';

export interface Pronoun {
  nominative: Word;
  genitive: Word;
  dative: Word;
  accusative: Word;
  instrumental: Word;
}
