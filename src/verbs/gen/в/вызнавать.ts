import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызнавать: PerfectVerb = {
  name: Word('вызнавать', 6),
  singular1stPerson: Word('вызнаю', 5),
  singular2ndPerson: Word('вызнаёшь', 4),
  singular3rdPerson: Word('вызнаёт', 4),
  plural1stPerson: Word('вызнаём', 4),
  plural2ndPerson: Word('вызнаёте', 4),
  plural3rdPerson: Word('вызнают', 5),
  masculinePast: Word('вызнавал', 6),
  femininePast: Word('вызнавала', 6),
  neuterPast: Word('вызнавало', 6),
  pluralPast: Word('вызнавали', 6),
  imperativeInformal: Word('вызнавай', 6),
  imperativeFormal: Word('вызнавайте', 6),
  imperfect: [],
};

perfectVerbs.set(вызнавать.name.text, вызнавать);

export { вызнавать };