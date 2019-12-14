import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ликовать: PerfectVerb = {
  name: Word('ликовать', 5),
  singular1stPerson: Word('ликую', 3),
  singular2ndPerson: Word('ликуешь', 3),
  singular3rdPerson: Word('ликует', 3),
  plural1stPerson: Word('ликуем', 3),
  plural2ndPerson: Word('ликуете', 3),
  plural3rdPerson: Word('ликуют', 3),
  masculinePast: Word('ликовал', 5),
  femininePast: Word('ликовала', 5),
  neuterPast: Word('ликовало', 5),
  pluralPast: Word('ликовали', 5),
  imperativeInformal: Word('ликуй', 3),
  imperativeFormal: Word('ликуйте', 3),
  imperfect: [],
};

perfectVerbs.set(ликовать.name.text, ликовать);

export { ликовать };