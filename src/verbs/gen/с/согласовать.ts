import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согласовать: PerfectVerb = {
  name: Word('согласовать', 8),
  singular1stPerson: Word('согласую', 6),
  singular2ndPerson: Word('согласуешь', 6),
  singular3rdPerson: Word('согласует', 6),
  plural1stPerson: Word('согласуем', 6),
  plural2ndPerson: Word('согласуете', 6),
  plural3rdPerson: Word('согласуют', 6),
  masculinePast: Word('согласовал', 8),
  femininePast: Word('согласовала', 8),
  neuterPast: Word('согласовало', 8),
  pluralPast: Word('согласовали', 8),
  imperativeInformal: Word('согласуй', 6),
  imperativeFormal: Word('согласуйте', 6),
  imperfect: [],
};

perfectVerbs.set(согласовать.name.text, согласовать);

export { согласовать };