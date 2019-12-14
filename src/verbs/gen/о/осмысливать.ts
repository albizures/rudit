import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмысливать: PerfectVerb = {
  name: Word('осмысливать', 3),
  singular1stPerson: Word('осмысливаю', 3),
  singular2ndPerson: Word('осмысливаешь', 3),
  singular3rdPerson: Word('осмысливает', 3),
  plural1stPerson: Word('осмысливаем', 3),
  plural2ndPerson: Word('осмысливаете', 3),
  plural3rdPerson: Word('осмысливают', 3),
  masculinePast: Word('осмысливал', 3),
  femininePast: Word('осмысливала', 3),
  neuterPast: Word('осмысливало', 3),
  pluralPast: Word('осмысливали', 3),
  imperativeInformal: Word('осмысливай', 3),
  imperativeFormal: Word('осмысливайте', 3),
  imperfect: [],
};

perfectVerbs.set(осмысливать.name.text, осмысливать);

export { осмысливать };