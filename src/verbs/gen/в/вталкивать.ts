import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вталкивать: PerfectVerb = {
  name: Word('вталкивать', 2),
  singular1stPerson: Word('вталкиваю', 2),
  singular2ndPerson: Word('вталкиваешь', 2),
  singular3rdPerson: Word('вталкивает', 2),
  plural1stPerson: Word('вталкиваем', 2),
  plural2ndPerson: Word('вталкиваете', 2),
  plural3rdPerson: Word('вталкивают', 2),
  masculinePast: Word('вталкивал', 2),
  femininePast: Word('вталкивала', 2),
  neuterPast: Word('вталкивало', 2),
  pluralPast: Word('вталкивали', 2),
  imperativeInformal: Word('вталкивай', 2),
  imperativeFormal: Word('вталкивайте', 2),
  imperfect: [],
};

perfectVerbs.set(вталкивать.name.text, вталкивать);

export { вталкивать };