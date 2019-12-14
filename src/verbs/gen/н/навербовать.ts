import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навербовать: PerfectVerb = {
  name: Word('навербовать', 8),
  singular1stPerson: Word('навербую', 6),
  singular2ndPerson: Word('навербуешь', 6),
  singular3rdPerson: Word('навербует', 6),
  plural1stPerson: Word('навербуем', 6),
  plural2ndPerson: Word('навербуете', 6),
  plural3rdPerson: Word('навербуют', 6),
  masculinePast: Word('навербовал', 8),
  femininePast: Word('навербовала', 8),
  neuterPast: Word('навербовало', 8),
  pluralPast: Word('навербовали', 8),
  imperativeInformal: Word('навербуй', 6),
  imperativeFormal: Word('навербуйте', 6),
  imperfect: [],
};

perfectVerbs.set(навербовать.name.text, навербовать);

export { навербовать };