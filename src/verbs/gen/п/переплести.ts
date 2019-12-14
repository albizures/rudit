import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплести: PerfectVerb = {
  name: Word('переплести', 9),
  singular1stPerson: Word('переплету', 8),
  singular2ndPerson: Word('переплетёшь', 1),
  singular3rdPerson: Word('переплетёт', 1),
  plural1stPerson: Word('переплетём', 1),
  plural2ndPerson: Word('переплетёте', 1),
  plural3rdPerson: Word('переплетут', 8),
  masculinePast: Word('переплёл', 1),
  femininePast: Word('переплела', 8),
  neuterPast: Word('переплело', 8),
  pluralPast: Word('переплели', 8),
  imperativeInformal: Word('переплети', 8),
  imperativeFormal: Word('переплетите', 8),
  imperfect: [],
};

perfectVerbs.set(переплести.name.text, переплести);

export { переплести };