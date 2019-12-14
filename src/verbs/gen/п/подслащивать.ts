import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подслащивать: PerfectVerb = {
  name: Word('подслащивать', 5),
  singular1stPerson: Word('подслащиваю', 5),
  singular2ndPerson: Word('подслащиваешь', 5),
  singular3rdPerson: Word('подслащивает', 5),
  plural1stPerson: Word('подслащиваем', 5),
  plural2ndPerson: Word('подслащиваете', 5),
  plural3rdPerson: Word('подслащивают', 5),
  masculinePast: Word('подслащивал', 5),
  femininePast: Word('подслащивала', 5),
  neuterPast: Word('подслащивало', 5),
  pluralPast: Word('подслащивали', 5),
  imperativeInformal: Word('подслащивай', 5),
  imperativeFormal: Word('подслащивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подслащивать.name.text, подслащивать);

export { подслащивать };