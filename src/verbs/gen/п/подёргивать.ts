import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёргивать: PerfectVerb = {
  name: Word('подёргивать', 8),
  singular1stPerson: Word('подёргиваю', 8),
  singular2ndPerson: Word('подёргиваешь', 8),
  singular3rdPerson: Word('подёргивает', 8),
  plural1stPerson: Word('подёргиваем', 8),
  plural2ndPerson: Word('подёргиваете', 8),
  plural3rdPerson: Word('подёргивают', 8),
  masculinePast: Word('подёргивал', 8),
  femininePast: Word('подёргивала', 8),
  neuterPast: Word('подёргивало', 8),
  pluralPast: Word('подёргивали', 8),
  imperativeInformal: Word('подёргивай', 8),
  imperativeFormal: Word('подёргивайте', 8),
  imperfect: [],
};

perfectVerbs.set(подёргивать.name.text, подёргивать);

export { подёргивать };