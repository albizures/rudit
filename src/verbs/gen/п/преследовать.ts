import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преследовать: PerfectVerb = {
  name: Word('преследовать', 5),
  singular1stPerson: Word('преследую', 5),
  singular2ndPerson: Word('преследуешь', 5),
  singular3rdPerson: Word('преследует', 5),
  plural1stPerson: Word('преследуем', 5),
  plural2ndPerson: Word('преследуете', 5),
  plural3rdPerson: Word('преследуют', 5),
  masculinePast: Word('преследовал', 5),
  femininePast: Word('преследовала', 5),
  neuterPast: Word('преследовало', 5),
  pluralPast: Word('преследовали', 5),
  imperativeInformal: Word('преследуй', 5),
  imperativeFormal: Word('преследуйте', 5),
  imperfect: [],
};

perfectVerbs.set(преследовать.name.text, преследовать);

export { преследовать };