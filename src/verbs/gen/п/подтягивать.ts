import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтягивать: PerfectVerb = {
  name: Word('подтягивать', 4),
  singular1stPerson: Word('подтягиваю', 4),
  singular2ndPerson: Word('подтягиваешь', 4),
  singular3rdPerson: Word('подтягивает', 4),
  plural1stPerson: Word('подтягиваем', 4),
  plural2ndPerson: Word('подтягиваете', 4),
  plural3rdPerson: Word('подтягивают', 4),
  masculinePast: Word('подтягивал', 4),
  femininePast: Word('подтягивала', 4),
  neuterPast: Word('подтягивало', 4),
  pluralPast: Word('подтягивали', 4),
  imperativeInformal: Word('подтягивай', 4),
  imperativeFormal: Word('подтягивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подтягивать.name.text, подтягивать);

export { подтягивать };