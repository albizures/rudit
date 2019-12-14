import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырисовать: PerfectVerb = {
  name: Word('вырисовать', 1),
  singular1stPerson: Word('вырисую', 1),
  singular2ndPerson: Word('вырисуешь', 1),
  singular3rdPerson: Word('вырисует', 1),
  plural1stPerson: Word('вырисуем', 1),
  plural2ndPerson: Word('вырисуете', 1),
  plural3rdPerson: Word('вырисуют', 1),
  masculinePast: Word('вырисовал', 1),
  femininePast: Word('вырисовала', 1),
  neuterPast: Word('вырисовало', 1),
  pluralPast: Word('вырисовали', 1),
  imperativeInformal: Word('вырисуй', 1),
  imperativeFormal: Word('вырисуйте', 1),
  imperfect: [],
};

perfectVerbs.set(вырисовать.name.text, вырисовать);

export { вырисовать };