import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растирать: PerfectVerb = {
  name: Word('растирать', 6),
  singular1stPerson: Word('растираю', 6),
  singular2ndPerson: Word('растираешь', 6),
  singular3rdPerson: Word('растирает', 6),
  plural1stPerson: Word('растираем', 6),
  plural2ndPerson: Word('растираете', 6),
  plural3rdPerson: Word('растирают', 6),
  masculinePast: Word('растирал', 6),
  femininePast: Word('растирала', 6),
  neuterPast: Word('растирало', 6),
  pluralPast: Word('растирали', 6),
  imperativeInformal: Word('растирай', 6),
  imperativeFormal: Word('растирайте', 6),
  imperfect: [],
};

perfectVerbs.set(растирать.name.text, растирать);

export { растирать };