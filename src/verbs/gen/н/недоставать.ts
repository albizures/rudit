import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоставать: PerfectVerb = {
  name: Word('недоставать', 8),
  singular1stPerson: Word('недостаю', 7),
  singular2ndPerson: Word('недостаёшь', 6),
  singular3rdPerson: Word('недостаёт', 6),
  plural1stPerson: Word('недостаём', 6),
  plural2ndPerson: Word('недостаёте', 6),
  plural3rdPerson: Word('недостают', 7),
  masculinePast: Word('недоставал', 8),
  femininePast: Word('недоставала', 8),
  neuterPast: Word('недоставало', 8),
  pluralPast: Word('недоставали', 8),
  imperativeInformal: Word('недоставай', 8),
  imperativeFormal: Word('недоставайте', 8),
  imperfect: [],
};

perfectVerbs.set(недоставать.name.text, недоставать);

export { недоставать };