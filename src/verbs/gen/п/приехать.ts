import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приехать: PerfectVerb = {
  name: Word('приехать', 3),
  singular1stPerson: Word('приеду', 3),
  singular2ndPerson: Word('приедешь', 3),
  singular3rdPerson: Word('приедет', 3),
  plural1stPerson: Word('приедем', 3),
  plural2ndPerson: Word('приедете', 3),
  plural3rdPerson: Word('приедут', 3),
  masculinePast: Word('приехал', 3),
  femininePast: Word('приехала', 3),
  neuterPast: Word('приехало', 3),
  pluralPast: Word('приехали', 3),
  imperativeInformal: Word('приезжай', 6),
  imperativeFormal: Word('приезжайте', 6),
  imperfect: ['приезжать'],
};

perfectVerbs.set(приехать.name.text, приехать);

export { приехать };