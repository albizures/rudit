import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доплести: PerfectVerb = {
  name: Word('доплести', 7),
  singular1stPerson: Word('доплету', 6),
  singular2ndPerson: Word('доплетёшь', 4),
  singular3rdPerson: Word('доплетёт', 4),
  plural1stPerson: Word('доплетём', 4),
  plural2ndPerson: Word('доплетёте', 4),
  plural3rdPerson: Word('доплетут', 6),
  masculinePast: Word('доплёл', 1),
  femininePast: Word('доплела', 6),
  neuterPast: Word('доплело', 6),
  pluralPast: Word('доплели', 6),
  imperativeInformal: Word('доплети', 6),
  imperativeFormal: Word('доплетите', 6),
  imperfect: [],
};

perfectVerbs.set(доплести.name.text, доплести);

export { доплести };