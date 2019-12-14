import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восставать: PerfectVerb = {
  name: Word('восставать', 7),
  singular1stPerson: Word('восстаю', 6),
  singular2ndPerson: Word('восстаёшь', 6),
  singular3rdPerson: Word('восстаёт', 6),
  plural1stPerson: Word('восстаём', 6),
  plural2ndPerson: Word('восстаёте', 6),
  plural3rdPerson: Word('восстают', 6),
  masculinePast: Word('восставал', 7),
  femininePast: Word('восставала', 7),
  neuterPast: Word('восставало', 7),
  pluralPast: Word('восставали', 7),
  imperativeInformal: Word('восставай', 7),
  imperativeFormal: Word('восставайте', 7),
  imperfect: ['восстать'],
};

perfectVerbs.set(восставать.name.text, восставать);

export { восставать };