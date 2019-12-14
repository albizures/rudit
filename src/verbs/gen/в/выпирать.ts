import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпирать: PerfectVerb = {
  name: Word('выпирать', 5),
  singular1stPerson: Word('выпираю', 5),
  singular2ndPerson: Word('выпираешь', 5),
  singular3rdPerson: Word('выпирает', 5),
  plural1stPerson: Word('выпираем', 5),
  plural2ndPerson: Word('выпираете', 5),
  plural3rdPerson: Word('выпирают', 5),
  masculinePast: Word('выпирал', 5),
  femininePast: Word('выпирала', 5),
  neuterPast: Word('выпирало', 5),
  pluralPast: Word('выпирали', 5),
  imperativeInformal: Word('выпирай', 5),
  imperativeFormal: Word('выпирайте', 5),
  imperfect: [],
};

perfectVerbs.set(выпирать.name.text, выпирать);

export { выпирать };