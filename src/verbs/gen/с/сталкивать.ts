import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сталкивать: PerfectVerb = {
  name: Word('сталкивать', 2),
  singular1stPerson: Word('сталкиваю', 2),
  singular2ndPerson: Word('сталкиваешь', 2),
  singular3rdPerson: Word('сталкивает', 2),
  plural1stPerson: Word('сталкиваем', 2),
  plural2ndPerson: Word('сталкиваете', 2),
  plural3rdPerson: Word('сталкивают', 2),
  masculinePast: Word('сталкивал', 2),
  femininePast: Word('сталкивала', 2),
  neuterPast: Word('сталкивало', 2),
  pluralPast: Word('сталкивали', 2),
  imperativeInformal: Word('сталкивай', 2),
  imperativeFormal: Word('сталкивайте', 2),
  imperfect: [],
};

perfectVerbs.set(сталкивать.name.text, сталкивать);

export { сталкивать };