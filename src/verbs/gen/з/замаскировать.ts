import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаскировать: PerfectVerb = {
  name: Word('замаскировать', 10),
  singular1stPerson: Word('замаскирую', 8),
  singular2ndPerson: Word('замаскируешь', 8),
  singular3rdPerson: Word('замаскирует', 8),
  plural1stPerson: Word('замаскируем', 8),
  plural2ndPerson: Word('замаскируете', 8),
  plural3rdPerson: Word('замаскируют', 8),
  masculinePast: Word('замаскировал', 10),
  femininePast: Word('замаскировала', 10),
  neuterPast: Word('замаскировало', 10),
  pluralPast: Word('замаскировали', 10),
  imperativeInformal: Word('замаскируй', 8),
  imperativeFormal: Word('замаскируйте', 8),
  imperfect: [],
};

perfectVerbs.set(замаскировать.name.text, замаскировать);

export { замаскировать };