import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагнести: PerfectVerb = {
  name: Word('нагнести', 7),
  singular1stPerson: Word('нагнету', 6),
  singular2ndPerson: Word('нагнетёшь', 6),
  singular3rdPerson: Word('нагнетёт', 6),
  plural1stPerson: Word('нагнетём', 6),
  plural2ndPerson: Word('нагнетёте', 6),
  plural3rdPerson: Word('нагнетут', 6),
  masculinePast: Word('нагнёл', 4),
  femininePast: Word('нагнела', 6),
  neuterPast: Word('нагнело', 6),
  pluralPast: Word('нагнели', 6),
  imperativeInformal: Word('нагнети', 6),
  imperativeFormal: Word('нагнетите', 6),
  imperfect: [],
};

perfectVerbs.set(нагнести.name.text, нагнести);

export { нагнести };