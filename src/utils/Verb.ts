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
