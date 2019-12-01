import { Word } from './Word';

export interface Verb {
  name: Word;
  singular1stPerson: Word;
  singular2ndPerson: Word;
  singular3rdPerson: Word;
  plural1stPerson: Word;
  plural2ndPerson: Word;
  plural3rdPerson: Word;
  masculinePast: Word;
  femininePast: Word;
  neuterPast: Word;
  pluralPast: Word;
  imperativeInformal: Word;
  imperativeFormal: Word;
}

export const verbConjugations: (keyof Verb)[] = [
  'singular1stPerson',
  'singular2ndPerson',
  'singular3rdPerson',
  'plural1stPerson',
  'plural2ndPerson',
  'plural3rdPerson',
  'masculinePast',
  'femininePast',
  'neuterPast',
  'pluralPast',
  'imperativeInformal',
  'imperativeFormal',
];
