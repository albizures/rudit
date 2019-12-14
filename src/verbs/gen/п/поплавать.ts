import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплавать: PerfectVerb = {
  name: Word('поплавать', 4),
  singular1stPerson: Word('поплаваю', 4),
  singular2ndPerson: Word('поплаваешь', 4),
  singular3rdPerson: Word('поплавает', 4),
  plural1stPerson: Word('поплаваем', 4),
  plural2ndPerson: Word('поплаваете', 4),
  plural3rdPerson: Word('поплавают', 4),
  masculinePast: Word('поплавал', 4),
  femininePast: Word('поплавала', 4),
  neuterPast: Word('поплавало', 4),
  pluralPast: Word('поплавали', 4),
  imperativeInformal: Word('поплавай', 4),
  imperativeFormal: Word('поплавайте', 4),
  imperfect: [],
};

perfectVerbs.set(поплавать.name.text, поплавать);

export { поплавать };