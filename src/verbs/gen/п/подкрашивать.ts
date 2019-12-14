import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрашивать: PerfectVerb = {
  name: Word('подкрашивать', 5),
  singular1stPerson: Word('подкрашиваю', 5),
  singular2ndPerson: Word('подкрашиваешь', 5),
  singular3rdPerson: Word('подкрашивает', 5),
  plural1stPerson: Word('подкрашиваем', 5),
  plural2ndPerson: Word('подкрашиваете', 5),
  plural3rdPerson: Word('подкрашивают', 5),
  masculinePast: Word('подкрашивал', 5),
  femininePast: Word('подкрашивала', 5),
  neuterPast: Word('подкрашивало', 5),
  pluralPast: Word('подкрашивали', 5),
  imperativeInformal: Word('подкрашивай', 5),
  imperativeFormal: Word('подкрашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подкрашивать.name.text, подкрашивать);

export { подкрашивать };