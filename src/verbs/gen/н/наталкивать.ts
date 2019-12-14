import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наталкивать: PerfectVerb = {
  name: Word('наталкивать', 3),
  singular1stPerson: Word('наталкиваю', 3),
  singular2ndPerson: Word('наталкиваешь', 3),
  singular3rdPerson: Word('наталкивает', 3),
  plural1stPerson: Word('наталкиваем', 3),
  plural2ndPerson: Word('наталкиваете', 3),
  plural3rdPerson: Word('наталкивают', 3),
  masculinePast: Word('наталкивал', 3),
  femininePast: Word('наталкивала', 3),
  neuterPast: Word('наталкивало', 3),
  pluralPast: Word('наталкивали', 3),
  imperativeInformal: Word('наталкивай', 3),
  imperativeFormal: Word('наталкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(наталкивать.name.text, наталкивать);

export { наталкивать };