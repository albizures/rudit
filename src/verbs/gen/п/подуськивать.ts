import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подуськивать: PerfectVerb = {
  name: Word('подуськивать', 3),
  singular1stPerson: Word('подуськиваю', 3),
  singular2ndPerson: Word('подуськиваешь', 3),
  singular3rdPerson: Word('подуськивает', 3),
  plural1stPerson: Word('подуськиваем', 3),
  plural2ndPerson: Word('подуськиваете', 3),
  plural3rdPerson: Word('подуськивают', 3),
  masculinePast: Word('подуськивал', 3),
  femininePast: Word('подуськивала', 3),
  neuterPast: Word('подуськивало', 3),
  pluralPast: Word('подуськивали', 3),
  imperativeInformal: Word('подуськивай', 3),
  imperativeFormal: Word('подуськивайте', 3),
  imperfect: [],
};

perfectVerbs.set(подуськивать.name.text, подуськивать);

export { подуськивать };