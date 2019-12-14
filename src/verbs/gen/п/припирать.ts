import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припирать: PerfectVerb = {
  name: Word('припирать', 6),
  singular1stPerson: Word('припираю', 6),
  singular2ndPerson: Word('припираешь', 6),
  singular3rdPerson: Word('припирает', 6),
  plural1stPerson: Word('припираем', 6),
  plural2ndPerson: Word('припираете', 6),
  plural3rdPerson: Word('припирают', 6),
  masculinePast: Word('припирал', 6),
  femininePast: Word('припирала', 6),
  neuterPast: Word('припирало', 6),
  pluralPast: Word('припирали', 6),
  imperativeInformal: Word('припирай', 6),
  imperativeFormal: Word('припирайте', 6),
  imperfect: [],
};

perfectVerbs.set(припирать.name.text, припирать);

export { припирать };