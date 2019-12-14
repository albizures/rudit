import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преуменьшать: PerfectVerb = {
  name: Word('преуменьшать', 9),
  singular1stPerson: Word('преуменьшаю', 9),
  singular2ndPerson: Word('преуменьшаешь', 9),
  singular3rdPerson: Word('преуменьшает', 9),
  plural1stPerson: Word('преуменьшаем', 9),
  plural2ndPerson: Word('преуменьшаете', 9),
  plural3rdPerson: Word('преуменьшают', 9),
  masculinePast: Word('преуменьшал', 9),
  femininePast: Word('преуменьшала', 9),
  neuterPast: Word('преуменьшало', 9),
  pluralPast: Word('преуменьшали', 9),
  imperativeInformal: Word('преуменьшай', 9),
  imperativeFormal: Word('преуменьшайте', 9),
  imperfect: [],
};

perfectVerbs.set(преуменьшать.name.text, преуменьшать);

export { преуменьшать };