import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подранивать: PerfectVerb = {
  name: Word('подранивать', 4),
  singular1stPerson: Word('подраниваю', 4),
  singular2ndPerson: Word('подраниваешь', 4),
  singular3rdPerson: Word('подранивает', 4),
  plural1stPerson: Word('подраниваем', 4),
  plural2ndPerson: Word('подраниваете', 4),
  plural3rdPerson: Word('подранивают', 4),
  masculinePast: Word('подранивал', 4),
  femininePast: Word('подранивала', 4),
  neuterPast: Word('подранивало', 4),
  pluralPast: Word('подранивали', 4),
  imperativeInformal: Word('подранивай', 4),
  imperativeFormal: Word('подранивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подранивать.name.text, подранивать);

export { подранивать };