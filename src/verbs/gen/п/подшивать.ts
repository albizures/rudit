import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подшивать: PerfectVerb = {
  name: Word('подшивать', 6),
  singular1stPerson: Word('подшиваю', 6),
  singular2ndPerson: Word('подшиваешь', 6),
  singular3rdPerson: Word('подшивает', 6),
  plural1stPerson: Word('подшиваем', 6),
  plural2ndPerson: Word('подшиваете', 6),
  plural3rdPerson: Word('подшивают', 6),
  masculinePast: Word('подшивал', 6),
  femininePast: Word('подшивала', 6),
  neuterPast: Word('подшивало', 6),
  pluralPast: Word('подшивали', 6),
  imperativeInformal: Word('подшивай', 6),
  imperativeFormal: Word('подшивайте', 6),
  imperfect: [],
};

perfectVerbs.set(подшивать.name.text, подшивать);

export { подшивать };