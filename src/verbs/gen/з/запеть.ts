import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запеть: PerfectVerb = {
  name: Word('запеть', 3),
  singular1stPerson: Word('запою', 4),
  singular2ndPerson: Word('запоёшь', 1),
  singular3rdPerson: Word('запоёт', 1),
  plural1stPerson: Word('запоём', 1),
  plural2ndPerson: Word('запоёте', 1),
  plural3rdPerson: Word('запоют', 4),
  masculinePast: Word('запел', 3),
  femininePast: Word('запела', 3),
  neuterPast: Word('запело', 3),
  pluralPast: Word('запели', 3),
  imperativeInformal: Word('запой', 3),
  imperativeFormal: Word('запойте', 3),
  imperfect: [],
};

perfectVerbs.set(запеть.name.text, запеть);

export { запеть };