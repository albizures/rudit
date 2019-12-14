import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обирать: PerfectVerb = {
  name: Word('обирать', 4),
  singular1stPerson: Word('обираю', 4),
  singular2ndPerson: Word('обираешь', 4),
  singular3rdPerson: Word('обирает', 4),
  plural1stPerson: Word('обираем', 4),
  plural2ndPerson: Word('обираете', 4),
  plural3rdPerson: Word('обирают', 4),
  masculinePast: Word('обирал', 4),
  femininePast: Word('обирала', 4),
  neuterPast: Word('обирало', 4),
  pluralPast: Word('обирали', 4),
  imperativeInformal: Word('обирай', 4),
  imperativeFormal: Word('обирайте', 4),
  imperfect: [],
};

perfectVerbs.set(обирать.name.text, обирать);

export { обирать };