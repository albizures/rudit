import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расталкивать: PerfectVerb = {
  name: Word('расталкивать', 4),
  singular1stPerson: Word('расталкиваю', 4),
  singular2ndPerson: Word('расталкиваешь', 4),
  singular3rdPerson: Word('расталкивает', 4),
  plural1stPerson: Word('расталкиваем', 4),
  plural2ndPerson: Word('расталкиваете', 4),
  plural3rdPerson: Word('расталкивают', 4),
  masculinePast: Word('расталкивал', 4),
  femininePast: Word('расталкивала', 4),
  neuterPast: Word('расталкивало', 4),
  pluralPast: Word('расталкивали', 4),
  imperativeInformal: Word('расталкивай', 4),
  imperativeFormal: Word('расталкивайте', 4),
  imperfect: [],
};

perfectVerbs.set(расталкивать.name.text, расталкивать);

export { расталкивать };