import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоставать: PerfectVerb = {
  name: Word('недоставать', 8),
  singular1stPerson: Word('недостаю', 7),
  singular2ndPerson: Word('недостаёшь', 7),
  singular3rdPerson: Word('недостаёт', 7),
  plural1stPerson: Word('недостаём', 7),
  plural2ndPerson: Word('недостаёте', 7),
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