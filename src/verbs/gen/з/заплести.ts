import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплести: PerfectVerb = {
  name: Word('заплести', 7),
  singular1stPerson: Word('заплету', 6),
  singular2ndPerson: Word('заплетёшь', 6),
  singular3rdPerson: Word('заплетёт', 6),
  plural1stPerson: Word('заплетём', 6),
  plural2ndPerson: Word('заплетёте', 6),
  plural3rdPerson: Word('заплетут', 6),
  masculinePast: Word('заплёл', 4),
  femininePast: Word('заплела', 6),
  neuterPast: Word('заплело', 6),
  pluralPast: Word('заплели', 6),
  imperativeInformal: Word('заплети', 6),
  imperativeFormal: Word('заплетите', 6),
  imperfect: [],
};

perfectVerbs.set(заплести.name.text, заплести);

export { заплести };