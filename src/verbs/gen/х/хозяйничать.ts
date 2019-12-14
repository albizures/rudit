import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хозяйничать: PerfectVerb = {
  name: Word('хозяйничать', 3),
  singular1stPerson: Word('хозяйничаю', 3),
  singular2ndPerson: Word('хозяйничаешь', 3),
  singular3rdPerson: Word('хозяйничает', 3),
  plural1stPerson: Word('хозяйничаем', 3),
  plural2ndPerson: Word('хозяйничаете', 3),
  plural3rdPerson: Word('хозяйничают', 3),
  masculinePast: Word('хозяйничал', 3),
  femininePast: Word('хозяйничала', 3),
  neuterPast: Word('хозяйничало', 3),
  pluralPast: Word('хозяйничали', 3),
  imperativeInformal: Word('хозяйничай', 3),
  imperativeFormal: Word('хозяйничайте', 3),
  imperfect: [],
};

perfectVerbs.set(хозяйничать.name.text, хозяйничать);

export { хозяйничать };