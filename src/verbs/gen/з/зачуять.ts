import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачуять: PerfectVerb = {
  name: Word('зачуять', 3),
  singular1stPerson: Word('зачую', 3),
  singular2ndPerson: Word('зачуешь', 3),
  singular3rdPerson: Word('зачует', 3),
  plural1stPerson: Word('зачуем', 3),
  plural2ndPerson: Word('зачуете', 3),
  plural3rdPerson: Word('зачуют', 3),
  masculinePast: Word('зачуял', 3),
  femininePast: Word('зачуяла', 3),
  neuterPast: Word('зачуяло', 3),
  pluralPast: Word('зачуяли', 3),
  imperativeInformal: Word('зачуй', 3),
  imperativeFormal: Word('зачуйте', 3),
  imperfect: [],
};

perfectVerbs.set(зачуять.name.text, зачуять);

export { зачуять };