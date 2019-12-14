import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отставать: PerfectVerb = {
  name: Word('отставать', 6),
  singular1stPerson: Word('отстаю', 5),
  singular2ndPerson: Word('отстаёшь', 4),
  singular3rdPerson: Word('отстаёт', 4),
  plural1stPerson: Word('отстаём', 4),
  plural2ndPerson: Word('отстаёте', 4),
  plural3rdPerson: Word('отстают', 5),
  masculinePast: Word('отставал', 6),
  femininePast: Word('отставала', 6),
  neuterPast: Word('отставало', 6),
  pluralPast: Word('отставали', 6),
  imperativeInformal: Word('отставай', 6),
  imperativeFormal: Word('отставайте', 6),
  imperfect: ['отстать'],
};

perfectVerbs.set(отставать.name.text, отставать);

export { отставать };