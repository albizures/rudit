import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const палатализовать: PerfectVerb = {
  name: Word('палатализовать', 11),
  singular1stPerson: Word('палатализую', 9),
  singular2ndPerson: Word('палатализуешь', 9),
  singular3rdPerson: Word('палатализует', 9),
  plural1stPerson: Word('палатализуем', 9),
  plural2ndPerson: Word('палатализуете', 9),
  plural3rdPerson: Word('палатализуют', 9),
  masculinePast: Word('палатализовал', 11),
  femininePast: Word('палатализовала', 11),
  neuterPast: Word('палатализовало', 11),
  pluralPast: Word('палатализовали', 11),
  imperativeInformal: Word('палатализуй', 9),
  imperativeFormal: Word('палатализуйте', 9),
  imperfect: [],
};

perfectVerbs.set(палатализовать.name.text, палатализовать);

export { палатализовать };