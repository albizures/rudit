import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплести: PerfectVerb = {
  name: Word('сплести', 6),
  singular1stPerson: Word('сплету', 5),
  singular2ndPerson: Word('сплетёшь', 5),
  singular3rdPerson: Word('сплетёт', 5),
  plural1stPerson: Word('сплетём', 5),
  plural2ndPerson: Word('сплетёте', 5),
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