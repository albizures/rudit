import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отваливать: PerfectVerb = {
  name: Word('отваливать', 3),
  singular1stPerson: Word('отваливаю', 3),
  singular2ndPerson: Word('отваливаешь', 3),
  singular3rdPerson: Word('отваливает', 3),
  plural1stPerson: Word('отваливаем', 3),
  plural2ndPerson: Word('отваливаете', 3),
  plural3rdPerson: Word('отваливают', 3),
  masculinePast: Word('отваливал', 3),
  femininePast: Word('отваливала', 3),
  neuterPast: Word('отваливало', 3),
  pluralPast: Word('отваливали', 3),
  imperativeInformal: Word('отваливай', 3),
  imperativeFormal: Word('отваливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отваливать.name.text, отваливать);

export { отваливать };