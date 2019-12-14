import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплести: PerfectVerb = {
  name: Word('расплести', 8),
  singular1stPerson: Word('расплету', 7),
  singular2ndPerson: Word('расплетёшь', 7),
  singular3rdPerson: Word('расплетёт', 7),
  plural1stPerson: Word('расплетём', 7),
  plural2ndPerson: Word('расплетёте', 7),
  plural3rdPerson: Word('расплетут', 7),
  masculinePast: Word('расплёл', 5),
  femininePast: Word('расплела', 7),
  neuterPast: Word('расплело', 7),
  pluralPast: Word('расплели', 7),
  imperativeInformal: Word('расплети', 7),
  imperativeFormal: Word('расплетите', 7),
  imperfect: [],
};

perfectVerbs.set(расплести.name.text, расплести);

export { расплести };