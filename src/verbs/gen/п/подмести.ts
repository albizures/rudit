import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмести: PerfectVerb = {
  name: Word('подмести', 7),
  singular1stPerson: Word('подмету', 6),
  singular2ndPerson: Word('подметёшь', 4),
  singular3rdPerson: Word('подметёт', 4),
  plural1stPerson: Word('подметём', 4),
  plural2ndPerson: Word('подметёте', 4),
  plural3rdPerson: Word('подметут', 6),
  masculinePast: Word('подмёл', 1),
  femininePast: Word('подмела', 6),
  neuterPast: Word('подмело', 6),
  pluralPast: Word('подмели', 6),
  imperativeInformal: Word('подмети', 6),
  imperativeFormal: Word('подметите', 6),
  imperfect: ['подметать'],
};

perfectVerbs.set(подмести.name.text, подмести);

export { подмести };