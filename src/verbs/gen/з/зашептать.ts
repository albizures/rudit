import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашептать: PerfectVerb = {
  name: Word('зашептать', 6),
  singular1stPerson: Word('зашепчу', 6),
  singular2ndPerson: Word('зашепчешь', 3),
  singular3rdPerson: Word('зашепчет', 3),
  plural1stPerson: Word('зашепчем', 3),
  plural2ndPerson: Word('зашепчете', 3),
  plural3rdPerson: Word('зашепчут', 3),
  masculinePast: Word('зашептал', 6),
  femininePast: Word('зашептала', 6),
  neuterPast: Word('зашептало', 6),
  pluralPast: Word('зашептали', 6),
  imperativeInformal: Word('зашепчи', 6),
  imperativeFormal: Word('зашепчите', 6),
  imperfect: [],
};

perfectVerbs.set(зашептать.name.text, зашептать);

export { зашептать };