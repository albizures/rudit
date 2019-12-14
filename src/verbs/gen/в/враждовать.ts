import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const враждовать: PerfectVerb = {
  name: Word('враждовать', 7),
  singular1stPerson: Word('враждую', 5),
  singular2ndPerson: Word('враждуешь', 5),
  singular3rdPerson: Word('враждует', 5),
  plural1stPerson: Word('враждуем', 5),
  plural2ndPerson: Word('враждуете', 5),
  plural3rdPerson: Word('враждуют', 5),
  masculinePast: Word('враждовал', 7),
  femininePast: Word('враждовала', 7),
  neuterPast: Word('враждовало', 7),
  pluralPast: Word('враждовали', 7),
  imperativeInformal: Word('враждуй', 5),
  imperativeFormal: Word('враждуйте', 5),
  imperfect: [],
};

perfectVerbs.set(враждовать.name.text, враждовать);

export { враждовать };