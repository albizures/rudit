import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const галлюцинировать: PerfectVerb = {
  name: Word('галлюцинировать', 8),
  singular1stPerson: Word('галлюцинирую', 8),
  singular2ndPerson: Word('галлюцинируешь', 8),
  singular3rdPerson: Word('галлюцинирует', 8),
  plural1stPerson: Word('галлюцинируем', 8),
  plural2ndPerson: Word('галлюцинируете', 8),
  plural3rdPerson: Word('галлюцинируют', 8),
  masculinePast: Word('галлюцинировал', 8),
  femininePast: Word('галлюцинировала', 8),
  neuterPast: Word('галлюцинировало', 8),
  pluralPast: Word('галлюцинировали', 8),
  imperativeInformal: Word('галлюцинируй', 8),
  imperativeFormal: Word('галлюцинируйте', 8),
  imperfect: [],
};

perfectVerbs.set(галлюцинировать.name.text, галлюцинировать);

export { галлюцинировать };