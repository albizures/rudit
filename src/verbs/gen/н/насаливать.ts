import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насаливать: PerfectVerb = {
  name: Word('насаливать', 3),
  singular1stPerson: Word('насаливаю', 3),
  singular2ndPerson: Word('насаливаешь', 3),
  singular3rdPerson: Word('насаливает', 3),
  plural1stPerson: Word('насаливаем', 3),
  plural2ndPerson: Word('насаливаете', 3),
  plural3rdPerson: Word('насаливают', 3),
  masculinePast: Word('насаливал', 3),
  femininePast: Word('насаливала', 3),
  neuterPast: Word('насаливало', 3),
  pluralPast: Word('насаливали', 3),
  imperativeInformal: Word('насаливай', 3),
  imperativeFormal: Word('насаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(насаливать.name.text, насаливать);

export { насаливать };