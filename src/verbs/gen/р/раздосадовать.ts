import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздосадовать: PerfectVerb = {
  name: Word('раздосадовать', 6),
  singular1stPerson: Word('раздосадую', 6),
  singular2ndPerson: Word('раздосадуешь', 6),
  singular3rdPerson: Word('раздосадует', 6),
  plural1stPerson: Word('раздосадуем', 6),
  plural2ndPerson: Word('раздосадуете', 6),
  plural3rdPerson: Word('раздосадуют', 6),
  masculinePast: Word('раздосадовал', 6),
  femininePast: Word('раздосадовала', 6),
  neuterPast: Word('раздосадовало', 6),
  pluralPast: Word('раздосадовали', 6),
  imperativeInformal: Word('раздосадуй', 6),
  imperativeFormal: Word('раздосадуйте', 6),
  imperfect: [],
};

perfectVerbs.set(раздосадовать.name.text, раздосадовать);

export { раздосадовать };