import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцвечивать: PerfectVerb = {
  name: Word('расцвечивать', 5),
  singular1stPerson: Word('расцвечиваю', 5),
  singular2ndPerson: Word('расцвечиваешь', 5),
  singular3rdPerson: Word('расцвечивает', 5),
  plural1stPerson: Word('расцвечиваем', 5),
  plural2ndPerson: Word('расцвечиваете', 5),
  plural3rdPerson: Word('расцвечивают', 5),
  masculinePast: Word('расцвечивал', 5),
  femininePast: Word('расцвечивала', 5),
  neuterPast: Word('расцвечивало', 5),
  pluralPast: Word('расцвечивали', 5),
  imperativeInformal: Word('расцвечивай', 5),
  imperativeFormal: Word('расцвечивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расцвечивать.name.text, расцвечивать);

export { расцвечивать };