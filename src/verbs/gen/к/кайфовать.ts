import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кайфовать: PerfectVerb = {
  name: Word('кайфовать', 6),
  singular1stPerson: Word('кайфую', 4),
  singular2ndPerson: Word('кайфуешь', 4),
  singular3rdPerson: Word('кайфует', 4),
  plural1stPerson: Word('кайфуем', 4),
  plural2ndPerson: Word('кайфуете', 4),
  plural3rdPerson: Word('кайфуют', 4),
  masculinePast: Word('кайфовал', 6),
  femininePast: Word('кайфовала', 6),
  neuterPast: Word('кайфовало', 6),
  pluralPast: Word('кайфовали', 6),
  imperativeInformal: Word('кайфуй', 4),
  imperativeFormal: Word('кайфуйте', 4),
  imperfect: [],
};

perfectVerbs.set(кайфовать.name.text, кайфовать);

export { кайфовать };