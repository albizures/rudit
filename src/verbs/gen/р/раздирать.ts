import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздирать: PerfectVerb = {
  name: Word('раздирать', 6),
  singular1stPerson: Word('раздираю', 6),
  singular2ndPerson: Word('раздираешь', 6),
  singular3rdPerson: Word('раздирает', 6),
  plural1stPerson: Word('раздираем', 6),
  plural2ndPerson: Word('раздираете', 6),
  plural3rdPerson: Word('раздирают', 6),
  masculinePast: Word('раздирал', 6),
  femininePast: Word('раздирала', 6),
  neuterPast: Word('раздирало', 6),
  pluralPast: Word('раздирали', 6),
  imperativeInformal: Word('раздирай', 6),
  imperativeFormal: Word('раздирайте', 6),
  imperfect: [],
};

perfectVerbs.set(раздирать.name.text, раздирать);

export { раздирать };