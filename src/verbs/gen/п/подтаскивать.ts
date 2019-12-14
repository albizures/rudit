import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтаскивать: PerfectVerb = {
  name: Word('подтаскивать', 4),
  singular1stPerson: Word('подтаскиваю', 4),
  singular2ndPerson: Word('подтаскиваешь', 4),
  singular3rdPerson: Word('подтаскивает', 4),
  plural1stPerson: Word('подтаскиваем', 4),
  plural2ndPerson: Word('подтаскиваете', 4),
  plural3rdPerson: Word('подтаскивают', 4),
  masculinePast: Word('подтаскивал', 4),
  femininePast: Word('подтаскивала', 4),
  neuterPast: Word('подтаскивало', 4),
  pluralPast: Word('подтаскивали', 4),
  imperativeInformal: Word('подтаскивай', 4),
  imperativeFormal: Word('подтаскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подтаскивать.name.text, подтаскивать);

export { подтаскивать };