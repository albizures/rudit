import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посверкивать: PerfectVerb = {
  name: Word('посверкивать', 4),
  singular1stPerson: Word('посверкиваю', 4),
  singular2ndPerson: Word('посверкиваешь', 4),
  singular3rdPerson: Word('посверкивает', 4),
  plural1stPerson: Word('посверкиваем', 4),
  plural2ndPerson: Word('посверкиваете', 4),
  plural3rdPerson: Word('посверкивают', 4),
  masculinePast: Word('посверкивал', 4),
  femininePast: Word('посверкивала', 4),
  neuterPast: Word('посверкивало', 4),
  pluralPast: Word('посверкивали', 4),
  imperativeInformal: Word('посверкивай', 4),
  imperativeFormal: Word('посверкивайте', 4),
  imperfect: [],
};

perfectVerbs.set(посверкивать.name.text, посверкивать);

export { посверкивать };