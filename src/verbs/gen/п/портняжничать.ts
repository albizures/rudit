import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const портняжничать: PerfectVerb = {
  name: Word('портняжничать', 5),
  singular1stPerson: Word('портняжничаю', 5),
  singular2ndPerson: Word('портняжничаешь', 5),
  singular3rdPerson: Word('портняжничает', 5),
  plural1stPerson: Word('портняжничаем', 5),
  plural2ndPerson: Word('портняжничаете', 5),
  plural3rdPerson: Word('портняжничают', 5),
  masculinePast: Word('портняжничал', 5),
  femininePast: Word('портняжничала', 5),
  neuterPast: Word('портняжничало', 5),
  pluralPast: Word('портняжничали', 5),
  imperativeInformal: Word('портняжничай', 5),
  imperativeFormal: Word('портняжничайте', 5),
  imperfect: [],
};

perfectVerbs.set(портняжничать.name.text, портняжничать);

export { портняжничать };