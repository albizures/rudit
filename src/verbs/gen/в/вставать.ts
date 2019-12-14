import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вставать: PerfectVerb = {
  name: Word('вставать', 5),
  singular1stPerson: Word('встаю', 4),
  singular2ndPerson: Word('встаёшь', 3),
  singular3rdPerson: Word('встаёт', 3),
  plural1stPerson: Word('встаём', 3),
  plural2ndPerson: Word('встаёте', 3),
  plural3rdPerson: Word('встают', 4),
  masculinePast: Word('вставал', 5),
  femininePast: Word('вставала', 5),
  neuterPast: Word('вставало', 5),
  pluralPast: Word('вставали', 5),
  imperativeInformal: Word('вставай', 5),
  imperativeFormal: Word('вставайте', 5),
  imperfect: ['встать'],
};

perfectVerbs.set(вставать.name.text, вставать);

export { вставать };