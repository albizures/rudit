import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замасливать: PerfectVerb = {
  name: Word('замасливать', 3),
  singular1stPerson: Word('замасливаю', 3),
  singular2ndPerson: Word('замасливаешь', 3),
  singular3rdPerson: Word('замасливает', 3),
  plural1stPerson: Word('замасливаем', 3),
  plural2ndPerson: Word('замасливаете', 3),
  plural3rdPerson: Word('замасливают', 3),
  masculinePast: Word('замасливал', 3),
  femininePast: Word('замасливала', 3),
  neuterPast: Word('замасливало', 3),
  pluralPast: Word('замасливали', 3),
  imperativeInformal: Word('замасливай', 3),
  imperativeFormal: Word('замасливайте', 3),
  imperfect: [],
};

perfectVerbs.set(замасливать.name.text, замасливать);

export { замасливать };