import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацокать: PerfectVerb = {
  name: Word('зацокать', 3),
  singular1stPerson: Word('зацокаю', 3),
  singular2ndPerson: Word('зацокаешь', 3),
  singular3rdPerson: Word('зацокает', 3),
  plural1stPerson: Word('зацокаем', 3),
  plural2ndPerson: Word('зацокаете', 3),
  plural3rdPerson: Word('зацокают', 3),
  masculinePast: Word('зацокал', 3),
  femininePast: Word('зацокала', 3),
  neuterPast: Word('зацокало', 3),
  pluralPast: Word('зацокали', 3),
  imperativeInformal: Word('зацокай', 3),
  imperativeFormal: Word('зацокайте', 3),
  imperfect: [],
};

perfectVerbs.set(зацокать.name.text, зацокать);

export { зацокать };