import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёрничать: PerfectVerb = {
  name: Word('ёрничать', 0),
  singular1stPerson: Word('ёрничаю', 0),
  singular2ndPerson: Word('ёрничаешь', 0),
  singular3rdPerson: Word('ёрничает', 0),
  plural1stPerson: Word('ёрничаем', 0),
  plural2ndPerson: Word('ёрничаете', 0),
  plural3rdPerson: Word('ёрничают', 0),
  masculinePast: Word('ёрничал', 0),
  femininePast: Word('ёрничала', 0),
  neuterPast: Word('ёрничало', 0),
  pluralPast: Word('ёрничали', 0),
  imperativeInformal: Word('ёрничай', 0),
  imperativeFormal: Word('ёрничайте', 0),
  imperfect: [],
};

perfectVerbs.set(ёрничать.name.text, ёрничать);

export { ёрничать };