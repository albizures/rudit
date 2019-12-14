import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учуять: PerfectVerb = {
  name: Word('учуять', 2),
  singular1stPerson: Word('учую', 2),
  singular2ndPerson: Word('учуешь', 2),
  singular3rdPerson: Word('учует', 2),
  plural1stPerson: Word('учуем', 2),
  plural2ndPerson: Word('учуете', 2),
  plural3rdPerson: Word('учуют', 2),
  masculinePast: Word('учуял', 2),
  femininePast: Word('учуяла', 2),
  neuterPast: Word('учуяло', 2),
  pluralPast: Word('учуяли', 2),
  imperativeInformal: Word('учуй', 2),
  imperativeFormal: Word('учуйте', 2),
  imperfect: [],
};

perfectVerbs.set(учуять.name.text, учуять);

export { учуять };