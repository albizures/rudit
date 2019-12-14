import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаливать: PerfectVerb = {
  name: Word('замаливать', 3),
  singular1stPerson: Word('замаливаю', 3),
  singular2ndPerson: Word('замаливаешь', 3),
  singular3rdPerson: Word('замаливает', 3),
  plural1stPerson: Word('замаливаем', 3),
  plural2ndPerson: Word('замаливаете', 3),
  plural3rdPerson: Word('замаливают', 3),
  masculinePast: Word('замаливал', 3),
  femininePast: Word('замаливала', 3),
  neuterPast: Word('замаливало', 3),
  pluralPast: Word('замаливали', 3),
  imperativeInformal: Word('замаливай', 3),
  imperativeFormal: Word('замаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(замаливать.name.text, замаливать);

export { замаливать };