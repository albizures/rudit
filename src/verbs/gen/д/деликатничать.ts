import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деликатничать: PerfectVerb = {
  name: Word('деликатничать', 5),
  singular1stPerson: Word('деликатничаю', 5),
  singular2ndPerson: Word('деликатничаешь', 5),
  singular3rdPerson: Word('деликатничает', 5),
  plural1stPerson: Word('деликатничаем', 5),
  plural2ndPerson: Word('деликатничаете', 5),
  plural3rdPerson: Word('деликатничают', 5),
  masculinePast: Word('деликатничал', 5),
  femininePast: Word('деликатничала', 5),
  neuterPast: Word('деликатничало', 5),
  pluralPast: Word('деликатничали', 5),
  imperativeInformal: Word('деликатничай', 5),
  imperativeFormal: Word('деликатничайте', 5),
  imperfect: [],
};

perfectVerbs.set(деликатничать.name.text, деликатничать);

export { деликатничать };