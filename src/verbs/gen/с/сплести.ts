import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплести: PerfectVerb = {
  name: Word('сплести', 6),
  singular1stPerson: Word('сплету', 5),
  singular2ndPerson: Word('сплетёшь', 3),
  singular3rdPerson: Word('сплетёт', 3),
  plural1stPerson: Word('сплетём', 3),
  plural2ndPerson: Word('сплетёте', 3),
  plural3rdPerson: Word('сплетут', 5),
  masculinePast: Word('сплёл', 3),
  femininePast: Word('сплела', 5),
  neuterPast: Word('сплело', 5),
  pluralPast: Word('сплели', 5),
  imperativeInformal: Word('сплети', 5),
  imperativeFormal: Word('сплетите', 5),
  imperfect: ['плести','сплетать'],
};

perfectVerbs.set(сплести.name.text, сплести);

export { сплести };