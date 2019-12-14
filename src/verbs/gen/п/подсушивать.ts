import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсушивать: PerfectVerb = {
  name: Word('подсушивать', 4),
  singular1stPerson: Word('подсушиваю', 4),
  singular2ndPerson: Word('подсушиваешь', 4),
  singular3rdPerson: Word('подсушивает', 4),
  plural1stPerson: Word('подсушиваем', 4),
  plural2ndPerson: Word('подсушиваете', 4),
  plural3rdPerson: Word('подсушивают', 4),
  masculinePast: Word('подсушивал', 4),
  femininePast: Word('подсушивала', 4),
  neuterPast: Word('подсушивало', 4),
  pluralPast: Word('подсушивали', 4),
  imperativeInformal: Word('подсушивай', 4),
  imperativeFormal: Word('подсушивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсушивать.name.text, подсушивать);

export { подсушивать };