import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const верхоглядничать: PerfectVerb = {
  name: Word('верхоглядничать', 7),
  singular1stPerson: Word('верхоглядничаю', 7),
  singular2ndPerson: Word('верхоглядничаешь', 7),
  singular3rdPerson: Word('верхоглядничает', 7),
  plural1stPerson: Word('верхоглядничаем', 7),
  plural2ndPerson: Word('верхоглядничаете', 7),
  plural3rdPerson: Word('верхоглядничают', 7),
  masculinePast: Word('верхоглядничал', 7),
  femininePast: Word('верхоглядничала', 7),
  neuterPast: Word('верхоглядничало', 7),
  pluralPast: Word('верхоглядничали', 7),
  imperativeInformal: Word('верхоглядничай', 7),
  imperativeFormal: Word('верхоглядничайте', 7),
  imperfect: [],
};

perfectVerbs.set(верхоглядничать.name.text, верхоглядничать);

export { верхоглядничать };