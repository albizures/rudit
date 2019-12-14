import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сволакивать: PerfectVerb = {
  name: Word('сволакивать', 4),
  singular1stPerson: Word('сволакиваю', 4),
  singular2ndPerson: Word('сволакиваешь', 4),
  singular3rdPerson: Word('сволакивает', 4),
  plural1stPerson: Word('сволакиваем', 4),
  plural2ndPerson: Word('сволакиваете', 4),
  plural3rdPerson: Word('сволакивают', 4),
  masculinePast: Word('сволакивал', 4),
  femininePast: Word('сволакивала', 4),
  neuterPast: Word('сволакивало', 4),
  pluralPast: Word('сволакивали', 4),
  imperativeInformal: Word('сволакивай', 4),
  imperativeFormal: Word('сволакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(сволакивать.name.text, сволакивать);

export { сволакивать };