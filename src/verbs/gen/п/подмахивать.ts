import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмахивать: PerfectVerb = {
  name: Word('подмахивать', 4),
  singular1stPerson: Word('подмахиваю', 4),
  singular2ndPerson: Word('подмахиваешь', 4),
  singular3rdPerson: Word('подмахивает', 4),
  plural1stPerson: Word('подмахиваем', 4),
  plural2ndPerson: Word('подмахиваете', 4),
  plural3rdPerson: Word('подмахивают', 4),
  masculinePast: Word('подмахивал', 4),
  femininePast: Word('подмахивала', 4),
  neuterPast: Word('подмахивало', 4),
  pluralPast: Word('подмахивали', 4),
  imperativeInformal: Word('подмахивай', 4),
  imperativeFormal: Word('подмахивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подмахивать.name.text, подмахивать);

export { подмахивать };