import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подслушивать: PerfectVerb = {
  name: Word('подслушивать', 5),
  singular1stPerson: Word('подслушиваю', 5),
  singular2ndPerson: Word('подслушиваешь', 5),
  singular3rdPerson: Word('подслушивает', 5),
  plural1stPerson: Word('подслушиваем', 5),
  plural2ndPerson: Word('подслушиваете', 5),
  plural3rdPerson: Word('подслушивают', 5),
  masculinePast: Word('подслушивал', 5),
  femininePast: Word('подслушивала', 5),
  neuterPast: Word('подслушивало', 5),
  pluralPast: Word('подслушивали', 5),
  imperativeInformal: Word('подслушивай', 5),
  imperativeFormal: Word('подслушивайте', 5),
  imperfect: ['подслушать'],
};

perfectVerbs.set(подслушивать.name.text, подслушивать);

export { подслушивать };