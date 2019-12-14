import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доставать: PerfectVerb = {
  name: Word('доставать', 6),
  singular1stPerson: Word('достаю', 5),
  singular2ndPerson: Word('достаёшь', 4),
  singular3rdPerson: Word('достаёт', 4),
  plural1stPerson: Word('достаём', 4),
  plural2ndPerson: Word('достаёте', 4),
  plural3rdPerson: Word('достают', 5),
  masculinePast: Word('доставал', 6),
  femininePast: Word('доставала', 6),
  neuterPast: Word('доставало', 6),
  pluralPast: Word('доставали', 6),
  imperativeInformal: Word('доставай', 6),
  imperativeFormal: Word('доставайте', 6),
  imperfect: ['достать'],
};

perfectVerbs.set(доставать.name.text, доставать);

export { доставать };