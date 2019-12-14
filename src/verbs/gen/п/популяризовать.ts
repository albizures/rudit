import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const популяризовать: PerfectVerb = {
  name: Word('популяризовать', 11),
  singular1stPerson: Word('популяризую', 9),
  singular2ndPerson: Word('популяризуешь', 9),
  singular3rdPerson: Word('популяризует', 9),
  plural1stPerson: Word('популяризуем', 9),
  plural2ndPerson: Word('популяризуете', 9),
  plural3rdPerson: Word('популяризуют', 9),
  masculinePast: Word('популяризовал', 11),
  femininePast: Word('популяризовала', 11),
  neuterPast: Word('популяризовало', 11),
  pluralPast: Word('популяризовали', 11),
  imperativeInformal: Word('популяризуй', 9),
  imperativeFormal: Word('популяризуйте', 9),
  imperfect: [],
};

perfectVerbs.set(популяризовать.name.text, популяризовать);

export { популяризовать };