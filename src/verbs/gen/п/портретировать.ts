import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const портретировать: PerfectVerb = {
  name: Word('портретировать', 7),
  singular1stPerson: Word('портретирую', 7),
  singular2ndPerson: Word('портретируешь', 7),
  singular3rdPerson: Word('портретирует', 7),
  plural1stPerson: Word('портретируем', 7),
  plural2ndPerson: Word('портретируете', 7),
  plural3rdPerson: Word('портретируют', 7),
  masculinePast: Word('портретировал', 7),
  femininePast: Word('портретировала', 7),
  neuterPast: Word('портретировало', 7),
  pluralPast: Word('портретировали', 7),
  imperativeInformal: Word('портретируй', 7),
  imperativeFormal: Word('портретируйте', 7),
  imperfect: [],
};

perfectVerbs.set(портретировать.name.text, портретировать);

export { портретировать };