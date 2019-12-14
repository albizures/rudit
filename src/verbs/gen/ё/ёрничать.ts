import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёрничать: PerfectVerb = {
  name: Word('ёрничать', 5),
  singular1stPerson: Word('ёрничаю', 5),
  singular2ndPerson: Word('ёрничаешь', 5),
  singular3rdPerson: Word('ёрничает', 5),
  plural1stPerson: Word('ёрничаем', 5),
  plural2ndPerson: Word('ёрничаете', 5),
  plural3rdPerson: Word('ёрничают', 5),
  masculinePast: Word('ёрничал', 5),
  femininePast: Word('ёрничала', 5),
  neuterPast: Word('ёрничало', 5),
  pluralPast: Word('ёрничали', 5),
  imperativeInformal: Word('ёрничай', 5),
  imperativeFormal: Word('ёрничайте', 5),
  imperfect: [],
};

perfectVerbs.set(ёрничать.name.text, ёрничать);

export { ёрничать };