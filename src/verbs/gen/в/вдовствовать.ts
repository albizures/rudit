import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдовствовать: PerfectVerb = {
  name: Word('вдовствовать', 2),
  singular1stPerson: Word('вдовствую', 2),
  singular2ndPerson: Word('вдовствуешь', 2),
  singular3rdPerson: Word('вдовствует', 2),
  plural1stPerson: Word('вдовствуем', 2),
  plural2ndPerson: Word('вдовствуете', 2),
  plural3rdPerson: Word('вдовствуют', 2),
  masculinePast: Word('вдовствовал', 2),
  femininePast: Word('вдовствовала', 2),
  neuterPast: Word('вдовствовало', 2),
  pluralPast: Word('вдовствовали', 2),
  imperativeInformal: Word('вдовствуй', 2),
  imperativeFormal: Word('вдовствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(вдовствовать.name.text, вдовствовать);

export { вдовствовать };