import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потирать: PerfectVerb = {
  name: Word('потирать', 5),
  singular1stPerson: Word('потираю', 5),
  singular2ndPerson: Word('потираешь', 5),
  singular3rdPerson: Word('потирает', 5),
  plural1stPerson: Word('потираем', 5),
  plural2ndPerson: Word('потираете', 5),
  plural3rdPerson: Word('потирают', 5),
  masculinePast: Word('потирал', 5),
  femininePast: Word('потирала', 5),
  neuterPast: Word('потирало', 5),
  pluralPast: Word('потирали', 5),
  imperativeInformal: Word('потирай', 5),
  imperativeFormal: Word('потирайте', 5),
  imperfect: [],
};

perfectVerbs.set(потирать.name.text, потирать);

export { потирать };