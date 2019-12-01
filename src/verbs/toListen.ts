import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 2;

const toListen: Verb = {
  name: Word('слушать', stress),
  singular1stPerson: Word('слу́шаю', stress),
  singular2ndPerson: Word('слу́шаешь', stress),
  singular3rdPerson: Word('слу́шает', stress),
  plural1stPerson: Word('слу́шаем', stress),
  plural2ndPerson: Word('слу́шаете', stress),
  plural3rdPerson: Word('слу́шают', stress),
  masculinePast: Word('слу́шал', stress),
  femininePast: Word('слу́шала', stress),
  neuterPast: Word('слу́шало', stress),
  pluralPast: Word('слу́шали', stress),
  imperativeInformal: Word('слу́шай', stress),
  imperativeFormal: Word('слу́шайте', stress),
};

export { toListen };
