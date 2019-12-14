import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поименовать: PerfectVerb = {
  name: Word('поименовать', 8),
  singular1stPerson: Word('поименую', 6),
  singular2ndPerson: Word('поименуешь', 6),
  singular3rdPerson: Word('поименует', 6),
  plural1stPerson: Word('поименуем', 6),
  plural2ndPerson: Word('поименуете', 6),
  plural3rdPerson: Word('поименуют', 6),
  masculinePast: Word('поименовал', 8),
  femininePast: Word('поименовала', 8),
  neuterPast: Word('поименовало', 8),
  pluralPast: Word('поименовали', 8),
  imperativeInformal: Word('поименуй', 6),
  imperativeFormal: Word('поименуйте', 6),
  imperfect: [],
};

perfectVerbs.set(поименовать.name.text, поименовать);

export { поименовать };