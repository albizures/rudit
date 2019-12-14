import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подравнивать: PerfectVerb = {
  name: Word('подравнивать', 4),
  singular1stPerson: Word('подравниваю', 4),
  singular2ndPerson: Word('подравниваешь', 4),
  singular3rdPerson: Word('подравнивает', 4),
  plural1stPerson: Word('подравниваем', 4),
  plural2ndPerson: Word('подравниваете', 4),
  plural3rdPerson: Word('подравнивают', 4),
  masculinePast: Word('подравнивал', 4),
  femininePast: Word('подравнивала', 4),
  neuterPast: Word('подравнивало', 4),
  pluralPast: Word('подравнивали', 4),
  imperativeInformal: Word('подравнивай', 4),
  imperativeFormal: Word('подравнивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подравнивать.name.text, подравнивать);

export { подравнивать };