import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расклеивать: PerfectVerb = {
  name: Word('расклеивать', 5),
  singular1stPerson: Word('расклеиваю', 5),
  singular2ndPerson: Word('расклеиваешь', 5),
  singular3rdPerson: Word('расклеивает', 5),
  plural1stPerson: Word('расклеиваем', 5),
  plural2ndPerson: Word('расклеиваете', 5),
  plural3rdPerson: Word('расклеивают', 5),
  masculinePast: Word('расклеивал', 5),
  femininePast: Word('расклеивала', 5),
  neuterPast: Word('расклеивало', 5),
  pluralPast: Word('расклеивали', 5),
  imperativeInformal: Word('расклеивай', 5),
  imperativeFormal: Word('расклеивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расклеивать.name.text, расклеивать);

export { расклеивать };