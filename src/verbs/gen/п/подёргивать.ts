import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёргивать: PerfectVerb = {
  name: Word('подёргивать', 3),
  singular1stPerson: Word('подёргиваю', 3),
  singular2ndPerson: Word('подёргиваешь', 3),
  singular3rdPerson: Word('подёргивает', 3),
  plural1stPerson: Word('подёргиваем', 3),
  plural2ndPerson: Word('подёргиваете', 3),
  plural3rdPerson: Word('подёргивают', 3),
  masculinePast: Word('подёргивал', 3),
  femininePast: Word('подёргивала', 3),
  neuterPast: Word('подёргивало', 3),
  pluralPast: Word('подёргивали', 3),
  imperativeInformal: Word('подёргивай', 3),
  imperativeFormal: Word('подёргивайте', 3),
  imperfect: [],
};

perfectVerbs.set(подёргивать.name.text, подёргивать);

export { подёргивать };