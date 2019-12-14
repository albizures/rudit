import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрошайничать: PerfectVerb = {
  name: Word('попрошайничать', 6),
  singular1stPerson: Word('попрошайничаю', 6),
  singular2ndPerson: Word('попрошайничаешь', 6),
  singular3rdPerson: Word('попрошайничает', 6),
  plural1stPerson: Word('попрошайничаем', 6),
  plural2ndPerson: Word('попрошайничаете', 6),
  plural3rdPerson: Word('попрошайничают', 6),
  masculinePast: Word('попрошайничал', 6),
  femininePast: Word('попрошайничала', 6),
  neuterPast: Word('попрошайничало', 6),
  pluralPast: Word('попрошайничали', 6),
  imperativeInformal: Word('попрошайничай', 6),
  imperativeFormal: Word('попрошайничайте', 6),
  imperfect: [],
};

perfectVerbs.set(попрошайничать.name.text, попрошайничать);

export { попрошайничать };