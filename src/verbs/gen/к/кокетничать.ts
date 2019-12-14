import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кокетничать: PerfectVerb = {
  name: Word('кокетничать', 3),
  singular1stPerson: Word('кокетничаю', 3),
  singular2ndPerson: Word('кокетничаешь', 3),
  singular3rdPerson: Word('кокетничает', 3),
  plural1stPerson: Word('кокетничаем', 3),
  plural2ndPerson: Word('кокетничаете', 3),
  plural3rdPerson: Word('кокетничают', 3),
  masculinePast: Word('кокетничал', 3),
  femininePast: Word('кокетничала', 3),
  neuterPast: Word('кокетничало', 3),
  pluralPast: Word('кокетничали', 3),
  imperativeInformal: Word('кокетничай', 3),
  imperativeFormal: Word('кокетничайте', 3),
  imperfect: [],
};

perfectVerbs.set(кокетничать.name.text, кокетничать);

export { кокетничать };