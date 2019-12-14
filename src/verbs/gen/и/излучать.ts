import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излучать: PerfectVerb = {
  name: Word('излучать', 5),
  singular1stPerson: Word('излучаю', 5),
  singular2ndPerson: Word('излучаешь', 5),
  singular3rdPerson: Word('излучает', 5),
  plural1stPerson: Word('излучаем', 5),
  plural2ndPerson: Word('излучаете', 5),
  plural3rdPerson: Word('излучают', 5),
  masculinePast: Word('излучал', 5),
  femininePast: Word('излучала', 5),
  neuterPast: Word('излучало', 5),
  pluralPast: Word('излучали', 5),
  imperativeInformal: Word('излучай', 5),
  imperativeFormal: Word('излучайте', 5),
  imperfect: [],
};

perfectVerbs.set(излучать.name.text, излучать);

export { излучать };