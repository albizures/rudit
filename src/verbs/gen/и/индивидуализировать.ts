import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const индивидуализировать: PerfectVerb = {
  name: Word('индивидуализировать', 12),
  singular1stPerson: Word('индивидуализирую', 12),
  singular2ndPerson: Word('индивидуализируешь', 12),
  singular3rdPerson: Word('индивидуализирует', 12),
  plural1stPerson: Word('индивидуализируем', 12),
  plural2ndPerson: Word('индивидуализируете', 12),
  plural3rdPerson: Word('индивидуализируют', 12),
  masculinePast: Word('индивидуализировал', 12),
  femininePast: Word('индивидуализировала', 12),
  neuterPast: Word('индивидуализировало', 12),
  pluralPast: Word('индивидуализировали', 12),
  imperativeInformal: Word('индивидуализируй', 12),
  imperativeFormal: Word('индивидуализируйте', 12),
  imperfect: [],
};

perfectVerbs.set(индивидуализировать.name.text, индивидуализировать);

export { индивидуализировать };