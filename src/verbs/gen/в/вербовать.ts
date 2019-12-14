import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вербовать: PerfectVerb = {
  name: Word('вербовать', 6),
  singular1stPerson: Word('вербую', 4),
  singular2ndPerson: Word('вербуешь', 4),
  singular3rdPerson: Word('вербует', 4),
  plural1stPerson: Word('вербуем', 4),
  plural2ndPerson: Word('вербуете', 4),
  plural3rdPerson: Word('вербуют', 4),
  masculinePast: Word('вербовал', 6),
  femininePast: Word('вербовала', 6),
  neuterPast: Word('вербовало', 6),
  pluralPast: Word('вербовали', 6),
  imperativeInformal: Word('вербуй', 4),
  imperativeFormal: Word('вербуйте', 4),
  imperfect: ['завербовать'],
};

perfectVerbs.set(вербовать.name.text, вербовать);

export { вербовать };