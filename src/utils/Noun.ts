import { Word } from './Word';

export enum Gender {
  Masculine = 'Masculine',
  Feminine = 'Feminine',
  Neuter = 'Neuter',
}

export interface Noun {
  gender: Gender;
  nominative: Word;
  genitive?: Word;
  dative?: Word;
  accusative: Word;
  instrumental?: Word;
  prepositional?: Word;
  pluralForm: PluralNoun;
}

export interface PluralNoun {
  nominative: Word;
  genitive?: Word;
  dative?: Word;
  accusative?: Word;
  instrumental?: Word;
  prepositional?: Word;
  singularForm?: Noun;
}
