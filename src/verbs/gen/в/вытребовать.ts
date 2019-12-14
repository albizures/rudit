import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытребовать: PerfectVerb = {
  name: Word('вытребовать', 1),
  singular1stPerson: Word('вытребую', 1),
  singular2ndPerson: Word('вытребуешь', 1),
  singular3rdPerson: Word('вытребует', 1),
  plural1stPerson: Word('вытребуем', 1),
  plural2ndPerson: Word('вытребуете', 1),
  plural3rdPerson: Word('вытребуют', 1),
  masculinePast: Word('вытребовал', 1),
  femininePast: Word('вытребовала', 1),
  neuterPast: Word('вытребовало', 1),
  pluralPast: Word('вытребовали', 1),
  imperativeInformal: Word('вытребуй', 1),
  imperativeFormal: Word('вытребуйте', 1),
  imperfect: [],
};

perfectVerbs.set(вытребовать.name.text, вытребовать);

export { вытребовать };