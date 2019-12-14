import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притягивать: PerfectVerb = {
  name: Word('притягивать', 4),
  singular1stPerson: Word('притягиваю', 4),
  singular2ndPerson: Word('притягиваешь', 4),
  singular3rdPerson: Word('притягивает', 4),
  plural1stPerson: Word('притягиваем', 4),
  plural2ndPerson: Word('притягиваете', 4),
  plural3rdPerson: Word('притягивают', 4),
  masculinePast: Word('притягивал', 4),
  femininePast: Word('притягивала', 4),
  neuterPast: Word('притягивало', 4),
  pluralPast: Word('притягивали', 4),
  imperativeInformal: Word('притягивай', 4),
  imperativeFormal: Word('притягивайте', 4),
  imperfect: ['притянуть'],
};

perfectVerbs.set(притягивать.name.text, притягивать);

export { притягивать };