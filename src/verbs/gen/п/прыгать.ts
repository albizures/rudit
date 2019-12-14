import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прыгать: PerfectVerb = {
  name: Word('прыгать', 2),
  singular1stPerson: Word('прыгаю', 2),
  singular2ndPerson: Word('прыгаешь', 2),
  singular3rdPerson: Word('прыгает', 2),
  plural1stPerson: Word('прыгаем', 2),
  plural2ndPerson: Word('прыгаете', 2),
  plural3rdPerson: Word('прыгают', 2),
  masculinePast: Word('прыгал', 2),
  femininePast: Word('прыгала', 2),
  neuterPast: Word('прыгало', 2),
  pluralPast: Word('прыгали', 2),
  imperativeInformal: Word('прыгай', 2),
  imperativeFormal: Word('прыгайте', 2),
  imperfect: ['попрыгать','прыгнуть'],
};

perfectVerbs.set(прыгать.name.text, прыгать);

export { прыгать };