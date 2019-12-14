import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const саботажничать: PerfectVerb = {
  name: Word('саботажничать', 5),
  singular1stPerson: Word('саботажничаю', 5),
  singular2ndPerson: Word('саботажничаешь', 5),
  singular3rdPerson: Word('саботажничает', 5),
  plural1stPerson: Word('саботажничаем', 5),
  plural2ndPerson: Word('саботажничаете', 5),
  plural3rdPerson: Word('саботажничают', 5),
  masculinePast: Word('саботажничал', 5),
  femininePast: Word('саботажничала', 5),
  neuterPast: Word('саботажничало', 5),
  pluralPast: Word('саботажничали', 5),
  imperativeInformal: Word('саботажничай', 5),
  imperativeFormal: Word('саботажничайте', 5),
  imperfect: [],
};

perfectVerbs.set(саботажничать.name.text, саботажничать);

export { саботажничать };