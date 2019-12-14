import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлечивать: PerfectVerb = {
  name: Word('подлечивать', 4),
  singular1stPerson: Word('подлечиваю', 4),
  singular2ndPerson: Word('подлечиваешь', 4),
  singular3rdPerson: Word('подлечивает', 4),
  plural1stPerson: Word('подлечиваем', 4),
  plural2ndPerson: Word('подлечиваете', 4),
  plural3rdPerson: Word('подлечивают', 4),
  masculinePast: Word('подлечивал', 4),
  femininePast: Word('подлечивала', 4),
  neuterPast: Word('подлечивало', 4),
  pluralPast: Word('подлечивали', 4),
  imperativeInformal: Word('подлечивай', 4),
  imperativeFormal: Word('подлечивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подлечивать.name.text, подлечивать);

export { подлечивать };