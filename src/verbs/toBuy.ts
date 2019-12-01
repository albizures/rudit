import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 5;

const toBuy: Verb = {
  name: Word('покупать', stress),
  singular1stPerson: Word('покупа́ю', stress),
  singular2ndPerson: Word('покупа́ешь', stress),
  singular3rdPerson: Word('покупа́ет', stress),
  plural1stPerson: Word('покупа́ем', stress),
  plural2ndPerson: Word('покупа́ете', stress),
  plural3rdPerson: Word('покупа́ют', stress),
  masculinePast: Word('покупа́л', stress),
  femininePast: Word('покупа́ла', stress),
  neuterPast: Word('покупа́ло', stress),
  pluralPast: Word('покупа́ли', stress),
  imperativeInformal: Word('покупай', stress),
  imperativeFormal: Word('покупайте', stress),
};

export { toBuy };
