import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрашивать: PerfectVerb = {
  name: Word('окрашивать', 3),
  singular1stPerson: Word('окрашиваю', 3),
  singular2ndPerson: Word('окрашиваешь', 3),
  singular3rdPerson: Word('окрашивает', 3),
  plural1stPerson: Word('окрашиваем', 3),
  plural2ndPerson: Word('окрашиваете', 3),
  plural3rdPerson: Word('окрашивают', 3),
  masculinePast: Word('окрашивал', 3),
  femininePast: Word('окрашивала', 3),
  neuterPast: Word('окрашивало', 3),
  pluralPast: Word('окрашивали', 3),
  imperativeInformal: Word('окрашивай', 3),
  imperativeFormal: Word('окрашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(окрашивать.name.text, окрашивать);

export { окрашивать };