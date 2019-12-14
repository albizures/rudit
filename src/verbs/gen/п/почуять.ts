import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почуять: PerfectVerb = {
  name: Word('почуять', 3),
  singular1stPerson: Word('почую', 3),
  singular2ndPerson: Word('почуешь', 3),
  singular3rdPerson: Word('почует', 3),
  plural1stPerson: Word('почуем', 3),
  plural2ndPerson: Word('почуете', 3),
  plural3rdPerson: Word('почуют', 3),
  masculinePast: Word('почуял', 3),
  femininePast: Word('почуяла', 3),
  neuterPast: Word('почуяло', 3),
  pluralPast: Word('почуяли', 3),
  imperativeInformal: Word('почуй', 3),
  imperativeFormal: Word('почуйте', 3),
  imperfect: [],
};

perfectVerbs.set(почуять.name.text, почуять);

export { почуять };