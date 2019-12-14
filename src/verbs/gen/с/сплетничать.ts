import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплетничать: PerfectVerb = {
  name: Word('сплетничать', 3),
  singular1stPerson: Word('сплетничаю', 3),
  singular2ndPerson: Word('сплетничаешь', 3),
  singular3rdPerson: Word('сплетничает', 3),
  plural1stPerson: Word('сплетничаем', 3),
  plural2ndPerson: Word('сплетничаете', 3),
  plural3rdPerson: Word('сплетничают', 3),
  masculinePast: Word('сплетничал', 3),
  femininePast: Word('сплетничала', 3),
  neuterPast: Word('сплетничало', 3),
  pluralPast: Word('сплетничали', 3),
  imperativeInformal: Word('сплетничай', 3),
  imperativeFormal: Word('сплетничайте', 3),
  imperfect: ['насплетничать'],
};

perfectVerbs.set(сплетничать.name.text, сплетничать);

export { сплетничать };