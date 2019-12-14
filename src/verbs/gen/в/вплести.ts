import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вплести: PerfectVerb = {
  name: Word('вплести', 6),
  singular1stPerson: Word('вплету', 5),
  singular2ndPerson: Word('вплетёшь', 5),
  singular3rdPerson: Word('вплетёт', 5),
  plural1stPerson: Word('вплетём', 5),
  plural2ndPerson: Word('вплетёте', 5),
  plural3rdPerson: Word('вплетут', 5),
  masculinePast: Word('вплёл', 3),
  femininePast: Word('вплела', 5),
  neuterPast: Word('вплело', 5),
  pluralPast: Word('вплели', 5),
  imperativeInformal: Word('вплети', 5),
  imperativeFormal: Word('вплетите', 5),
  imperfect: [],
};

perfectVerbs.set(вплести.name.text, вплести);

export { вплести };