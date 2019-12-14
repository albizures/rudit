import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изливать: PerfectVerb = {
  name: Word('изливать', 5),
  singular1stPerson: Word('изливаю', 5),
  singular2ndPerson: Word('изливаешь', 5),
  singular3rdPerson: Word('изливает', 5),
  plural1stPerson: Word('изливаем', 5),
  plural2ndPerson: Word('изливаете', 5),
  plural3rdPerson: Word('изливают', 5),
  masculinePast: Word('изливал', 5),
  femininePast: Word('изливала', 5),
  neuterPast: Word('изливало', 5),
  pluralPast: Word('изливали', 5),
  imperativeInformal: Word('изливай', 5),
  imperativeFormal: Word('изливайте', 5),
  imperfect: [],
};

perfectVerbs.set(изливать.name.text, изливать);

export { изливать };