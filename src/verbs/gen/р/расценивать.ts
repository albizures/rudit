import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расценивать: PerfectVerb = {
  name: Word('расценивать', 4),
  singular1stPerson: Word('расцениваю', 4),
  singular2ndPerson: Word('расцениваешь', 4),
  singular3rdPerson: Word('расценивает', 4),
  plural1stPerson: Word('расцениваем', 4),
  plural2ndPerson: Word('расцениваете', 4),
  plural3rdPerson: Word('расценивают', 4),
  masculinePast: Word('расценивал', 4),
  femininePast: Word('расценивала', 4),
  neuterPast: Word('расценивало', 4),
  pluralPast: Word('расценивали', 4),
  imperativeInformal: Word('расценивай', 4),
  imperativeFormal: Word('расценивайте', 4),
  imperfect: [],
};

perfectVerbs.set(расценивать.name.text, расценивать);

export { расценивать };