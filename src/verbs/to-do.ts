import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 1;

const read: Verb = {
  name: Word('делать', stress),
  singular1stPerson: Word('де́лаю', stress),
  singular2ndPerson: Word('де́лаешь', stress),
  singular3rdPerson: Word('де́лает', stress),
  plural1stPerson: Word('де́лаем', stress),
  plural2ndPerson: Word('де́лаете', stress),
  plural3rdPerson: Word('де́лают', stress),
  masculinePast: Word('де́лал', stress),
  femininePast: Word('де́лала', stress),
  neuterPast: Word('де́лало', stress),
  pluralPast: Word('де́лали', stress),
  imperativeInformal: Word('де́лай', stress),
  imperativeFormal: Word('де́лайте', stress),
};

export default read;
