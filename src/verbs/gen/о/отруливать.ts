import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отруливать: PerfectVerb = {
  name: Word('отруливать', 3),
  singular1stPerson: Word('отруливаю', 3),
  singular2ndPerson: Word('отруливаешь', 3),
  singular3rdPerson: Word('отруливает', 3),
  plural1stPerson: Word('отруливаем', 3),
  plural2ndPerson: Word('отруливаете', 3),
  plural3rdPerson: Word('отруливают', 3),
  masculinePast: Word('отруливал', 3),
  femininePast: Word('отруливала', 3),
  neuterPast: Word('отруливало', 3),
  pluralPast: Word('отруливали', 3),
  imperativeInformal: Word('отруливай', 3),
  imperativeFormal: Word('отруливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отруливать.name.text, отруливать);

export { отруливать };