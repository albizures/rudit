import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кантовать: PerfectVerb = {
  name: Word('кантовать', 6),
  singular1stPerson: Word('кантую', 4),
  singular2ndPerson: Word('кантуешь', 4),
  singular3rdPerson: Word('кантует', 4),
  plural1stPerson: Word('кантуем', 4),
  plural2ndPerson: Word('кантуете', 4),
  plural3rdPerson: Word('кантуют', 4),
  masculinePast: Word('кантовал', 6),
  femininePast: Word('кантовала', 6),
  neuterPast: Word('кантовало', 6),
  pluralPast: Word('кантовали', 6),
  imperativeInformal: Word('кантуй', 4),
  imperativeFormal: Word('кантуйте', 4),
  imperfect: [],
};

perfectVerbs.set(кантовать.name.text, кантовать);

export { кантовать };