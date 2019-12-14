import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притаскивать: PerfectVerb = {
  name: Word('притаскивать', 4),
  singular1stPerson: Word('притаскиваю', 4),
  singular2ndPerson: Word('притаскиваешь', 4),
  singular3rdPerson: Word('притаскивает', 4),
  plural1stPerson: Word('притаскиваем', 4),
  plural2ndPerson: Word('притаскиваете', 4),
  plural3rdPerson: Word('притаскивают', 4),
  masculinePast: Word('притаскивал', 4),
  femininePast: Word('притаскивала', 4),
  neuterPast: Word('притаскивало', 4),
  pluralPast: Word('притаскивали', 4),
  imperativeInformal: Word('притаскивай', 4),
  imperativeFormal: Word('притаскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(притаскивать.name.text, притаскивать);

export { притаскивать };