import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попеть: PerfectVerb = {
  name: Word('попеть', 3),
  singular1stPerson: Word('попою', 4),
  singular2ndPerson: Word('попоёшь', 1),
  singular3rdPerson: Word('попоёт', 1),
  plural1stPerson: Word('попоём', 1),
  plural2ndPerson: Word('попоёте', 6),
  plural3rdPerson: Word('попоют', 4),
  masculinePast: Word('попел', 3),
  femininePast: Word('попела', 3),
  neuterPast: Word('попело', 3),
  pluralPast: Word('попели', 3),
  imperativeInformal: Word('попой', 3),
  imperativeFormal: Word('попойте', 3),
  imperfect: [],
};

perfectVerbs.set(попеть.name.text, попеть);

export { попеть };