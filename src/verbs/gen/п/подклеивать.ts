import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подклеивать: PerfectVerb = {
  name: Word('подклеивать', 5),
  singular1stPerson: Word('подклеиваю', 5),
  singular2ndPerson: Word('подклеиваешь', 5),
  singular3rdPerson: Word('подклеивает', 5),
  plural1stPerson: Word('подклеиваем', 5),
  plural2ndPerson: Word('подклеиваете', 5),
  plural3rdPerson: Word('подклеивают', 5),
  masculinePast: Word('подклеивал', 5),
  femininePast: Word('подклеивала', 5),
  neuterPast: Word('подклеивало', 5),
  pluralPast: Word('подклеивали', 5),
  imperativeInformal: Word('подклеивай', 5),
  imperativeFormal: Word('подклеивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подклеивать.name.text, подклеивать);

export { подклеивать };