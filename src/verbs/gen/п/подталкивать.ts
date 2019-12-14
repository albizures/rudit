import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подталкивать: PerfectVerb = {
  name: Word('подталкивать', 4),
  singular1stPerson: Word('подталкиваю', 4),
  singular2ndPerson: Word('подталкиваешь', 4),
  singular3rdPerson: Word('подталкивает', 4),
  plural1stPerson: Word('подталкиваем', 4),
  plural2ndPerson: Word('подталкиваете', 4),
  plural3rdPerson: Word('подталкивают', 4),
  masculinePast: Word('подталкивал', 4),
  femininePast: Word('подталкивала', 4),
  neuterPast: Word('подталкивало', 4),
  pluralPast: Word('подталкивали', 4),
  imperativeInformal: Word('подталкивай', 4),
  imperativeFormal: Word('подталкивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подталкивать.name.text, подталкивать);

export { подталкивать };