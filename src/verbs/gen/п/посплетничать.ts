import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посплетничать: PerfectVerb = {
  name: Word('посплетничать', 5),
  singular1stPerson: Word('посплетничаю', 5),
  singular2ndPerson: Word('посплетничаешь', 5),
  singular3rdPerson: Word('посплетничает', 5),
  plural1stPerson: Word('посплетничаем', 5),
  plural2ndPerson: Word('посплетничаете', 5),
  plural3rdPerson: Word('посплетничают', 5),
  masculinePast: Word('посплетничал', 5),
  femininePast: Word('посплетничала', 5),
  neuterPast: Word('посплетничало', 5),
  pluralPast: Word('посплетничали', 5),
  imperativeInformal: Word('посплетничай', 5),
  imperativeFormal: Word('посплетничайте', 5),
  imperfect: [],
};

perfectVerbs.set(посплетничать.name.text, посплетничать);

export { посплетничать };