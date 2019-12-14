import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доставать: PerfectVerb = {
  name: Word('доставать', 6),
  singular1stPerson: Word('достаю', 5),
  singular2ndPerson: Word('достаёшь', 5),
  singular3rdPerson: Word('достаёт', 5),
  plural1stPerson: Word('достаём', 5),
  plural2ndPerson: Word('достаёте', 5),
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