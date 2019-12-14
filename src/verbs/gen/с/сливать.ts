import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сливать: PerfectVerb = {
  name: Word('сливать', 4),
  singular1stPerson: Word('сливаю', 4),
  singular2ndPerson: Word('сливаешь', 4),
  singular3rdPerson: Word('сливает', 4),
  plural1stPerson: Word('сливаем', 4),
  plural2ndPerson: Word('сливаете', 4),
  plural3rdPerson: Word('сливают', 4),
  masculinePast: Word('сливал', 4),
  femininePast: Word('сливала', 4),
  neuterPast: Word('сливало', 4),
  pluralPast: Word('сливали', 4),
  imperativeInformal: Word('сливай', 4),
  imperativeFormal: Word('сливайте', 4),
  imperfect: [],
};

perfectVerbs.set(сливать.name.text, сливать);

export { сливать };