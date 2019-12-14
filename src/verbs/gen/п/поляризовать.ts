import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поляризовать: PerfectVerb = {
  name: Word('поляризовать', 9),
  singular1stPerson: Word('поляризую', 7),
  singular2ndPerson: Word('поляризуешь', 7),
  singular3rdPerson: Word('поляризует', 7),
  plural1stPerson: Word('поляризуем', 7),
  plural2ndPerson: Word('поляризуете', 7),
  plural3rdPerson: Word('поляризуют', 7),
  masculinePast: Word('поляризовал', 9),
  femininePast: Word('поляризовала', 9),
  neuterPast: Word('поляризовало', 9),
  pluralPast: Word('поляризовали', 9),
  imperativeInformal: Word('поляризуй', 7),
  imperativeFormal: Word('поляризуйте', 7),
  imperfect: [],
};

perfectVerbs.set(поляризовать.name.text, поляризовать);

export { поляризовать };