import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашептать: PerfectVerb = {
  name: Word('нашептать', 6),
  singular1stPerson: Word('нашепчу', 6),
  singular2ndPerson: Word('нашепчешь', 3),
  singular3rdPerson: Word('нашепчет', 3),
  plural1stPerson: Word('нашепчем', 3),
  plural2ndPerson: Word('нашепчете', 3),
  plural3rdPerson: Word('нашепчут', 3),
  masculinePast: Word('нашептал', 6),
  femininePast: Word('нашептала', 6),
  neuterPast: Word('нашептало', 6),
  pluralPast: Word('нашептали', 6),
  imperativeInformal: Word('нашепчи', 6),
  imperativeFormal: Word('нашепчите', 6),
  imperfect: [],
};

perfectVerbs.set(нашептать.name.text, нашептать);

export { нашептать };