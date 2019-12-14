import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отталкивать: PerfectVerb = {
  name: Word('отталкивать', 3),
  singular1stPerson: Word('отталкиваю', 3),
  singular2ndPerson: Word('отталкиваешь', 3),
  singular3rdPerson: Word('отталкивает', 3),
  plural1stPerson: Word('отталкиваем', 3),
  plural2ndPerson: Word('отталкиваете', 3),
  plural3rdPerson: Word('отталкивают', 3),
  masculinePast: Word('отталкивал', 3),
  femininePast: Word('отталкивала', 3),
  neuterPast: Word('отталкивало', 3),
  pluralPast: Word('отталкивали', 3),
  imperativeInformal: Word('отталкивай', 3),
  imperativeFormal: Word('отталкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отталкивать.name.text, отталкивать);

export { отталкивать };