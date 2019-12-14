import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приарендовать: PerfectVerb = {
  name: Word('приарендовать', 10),
  singular1stPerson: Word('приарендую', 8),
  singular2ndPerson: Word('приарендуешь', 8),
  singular3rdPerson: Word('приарендует', 8),
  plural1stPerson: Word('приарендуем', 8),
  plural2ndPerson: Word('приарендуете', 8),
  plural3rdPerson: Word('приарендуют', 8),
  masculinePast: Word('приарендовал', 10),
  femininePast: Word('приарендовала', 10),
  neuterPast: Word('приарендовало', 10),
  pluralPast: Word('приарендовали', 10),
  imperativeInformal: Word('приарендуй', 8),
  imperativeFormal: Word('приарендуйте', 8),
  imperfect: [],
};

perfectVerbs.set(приарендовать.name.text, приарендовать);

export { приарендовать };