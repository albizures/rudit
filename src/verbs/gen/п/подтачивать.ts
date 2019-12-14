import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтачивать: PerfectVerb = {
  name: Word('подтачивать', 4),
  singular1stPerson: Word('подтачиваю', 4),
  singular2ndPerson: Word('подтачиваешь', 4),
  singular3rdPerson: Word('подтачивает', 4),
  plural1stPerson: Word('подтачиваем', 4),
  plural2ndPerson: Word('подтачиваете', 4),
  plural3rdPerson: Word('подтачивают', 4),
  masculinePast: Word('подтачивал', 4),
  femininePast: Word('подтачивала', 4),
  neuterPast: Word('подтачивало', 4),
  pluralPast: Word('подтачивали', 4),
  imperativeInformal: Word('подтачивай', 4),
  imperativeFormal: Word('подтачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подтачивать.name.text, подтачивать);

export { подтачивать };