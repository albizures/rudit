import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подменивать: PerfectVerb = {
  name: Word('подменивать', 4),
  singular1stPerson: Word('подмениваю', 4),
  singular2ndPerson: Word('подмениваешь', 4),
  singular3rdPerson: Word('подменивает', 4),
  plural1stPerson: Word('подмениваем', 4),
  plural2ndPerson: Word('подмениваете', 4),
  plural3rdPerson: Word('подменивают', 4),
  masculinePast: Word('подменивал', 4),
  femininePast: Word('подменивала', 4),
  neuterPast: Word('подменивало', 4),
  pluralPast: Word('подменивали', 4),
  imperativeInformal: Word('подменивай', 4),
  imperativeFormal: Word('подменивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подменивать.name.text, подменивать);

export { подменивать };