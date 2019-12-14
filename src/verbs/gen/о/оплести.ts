import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплести: PerfectVerb = {
  name: Word('оплести', 6),
  singular1stPerson: Word('оплету', 5),
  singular2ndPerson: Word('оплетёшь', 3),
  singular3rdPerson: Word('оплетёт', 3),
  plural1stPerson: Word('оплетём', 3),
  plural2ndPerson: Word('оплетёте', 3),
  plural3rdPerson: Word('оплетут', 5),
  masculinePast: Word('оплёл', 0),
  femininePast: Word('оплела', 5),
  neuterPast: Word('оплело', 5),
  pluralPast: Word('оплели', 5),
  imperativeInformal: Word('оплети', 5),
  imperativeFormal: Word('оплетите', 5),
  imperfect: [],
};

perfectVerbs.set(оплести.name.text, оплести);

export { оплести };