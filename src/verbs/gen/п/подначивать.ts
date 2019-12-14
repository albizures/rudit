import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подначивать: PerfectVerb = {
  name: Word('подначивать', 4),
  singular1stPerson: Word('подначиваю', 4),
  singular2ndPerson: Word('подначиваешь', 4),
  singular3rdPerson: Word('подначивает', 4),
  plural1stPerson: Word('подначиваем', 4),
  plural2ndPerson: Word('подначиваете', 4),
  plural3rdPerson: Word('подначивают', 4),
  masculinePast: Word('подначивал', 4),
  femininePast: Word('подначивала', 4),
  neuterPast: Word('подначивало', 4),
  pluralPast: Word('подначивали', 4),
  imperativeInformal: Word('подначивай', 4),
  imperativeFormal: Word('подначивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подначивать.name.text, подначивать);

export { подначивать };