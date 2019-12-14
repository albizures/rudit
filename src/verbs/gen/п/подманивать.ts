import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подманивать: PerfectVerb = {
  name: Word('подманивать', 4),
  singular1stPerson: Word('подманиваю', 4),
  singular2ndPerson: Word('подманиваешь', 4),
  singular3rdPerson: Word('подманивает', 4),
  plural1stPerson: Word('подманиваем', 4),
  plural2ndPerson: Word('подманиваете', 4),
  plural3rdPerson: Word('подманивают', 4),
  masculinePast: Word('подманивал', 4),
  femininePast: Word('подманивала', 4),
  neuterPast: Word('подманивало', 4),
  pluralPast: Word('подманивали', 4),
  imperativeInformal: Word('подманивай', 4),
  imperativeFormal: Word('подманивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подманивать.name.text, подманивать);

export { подманивать };