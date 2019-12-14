import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распеть: PerfectVerb = {
  name: Word('распеть', 4),
  singular1stPerson: Word('распою', 5),
  singular2ndPerson: Word('распоёшь', 5),
  singular3rdPerson: Word('распоёт', 5),
  plural1stPerson: Word('распоём', 5),
  plural2ndPerson: Word('распоёте', 5),
  plural3rdPerson: Word('распоют', 5),
  masculinePast: Word('распел', 4),
  femininePast: Word('распела', 4),
  neuterPast: Word('распело', 4),
  pluralPast: Word('распели', 4),
  imperativeInformal: Word('распой', 4),
  imperativeFormal: Word('распойте', 4),
  imperfect: [],
};

perfectVerbs.set(распеть.name.text, распеть);

export { распеть };