import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплести: PerfectVerb = {
  name: Word('заплести', 7),
  singular1stPerson: Word('заплету', 6),
  singular2ndPerson: Word('заплетёшь', 1),
  singular3rdPerson: Word('заплетёт', 1),
  plural1stPerson: Word('заплетём', 1),
  plural2ndPerson: Word('заплетёте', 1),
  plural3rdPerson: Word('заплетут', 6),
  masculinePast: Word('заплёл', 1),
  femininePast: Word('заплела', 6),
  neuterPast: Word('заплело', 6),
  pluralPast: Word('заплели', 6),
  imperativeInformal: Word('заплети', 6),
  imperativeFormal: Word('заплетите', 6),
  imperfect: [],
};

perfectVerbs.set(заплести.name.text, заплести);

export { заплести };