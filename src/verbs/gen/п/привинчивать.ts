import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привинчивать: PerfectVerb = {
  name: Word('привинчивать', 4),
  singular1stPerson: Word('привинчиваю', 4),
  singular2ndPerson: Word('привинчиваешь', 4),
  singular3rdPerson: Word('привинчивает', 4),
  plural1stPerson: Word('привинчиваем', 4),
  plural2ndPerson: Word('привинчиваете', 4),
  plural3rdPerson: Word('привинчивают', 4),
  masculinePast: Word('привинчивал', 4),
  femininePast: Word('привинчивала', 4),
  neuterPast: Word('привинчивало', 4),
  pluralPast: Word('привинчивали', 4),
  imperativeInformal: Word('привинчивай', 4),
  imperativeFormal: Word('привинчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(привинчивать.name.text, привинчивать);

export { привинчивать };