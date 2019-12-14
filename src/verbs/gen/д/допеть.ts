import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допеть: PerfectVerb = {
  name: Word('допеть', 3),
  singular1stPerson: Word('допою', 4),
  singular2ndPerson: Word('допоёшь', 1),
  singular3rdPerson: Word('допоёт', 1),
  plural1stPerson: Word('допоём', 1),
  plural2ndPerson: Word('допоёте', 6),
  plural3rdPerson: Word('допоют', 4),
  masculinePast: Word('допел', 3),
  femininePast: Word('допела', 3),
  neuterPast: Word('допело', 3),
  pluralPast: Word('допели', 3),
  imperativeInformal: Word('допой', 3),
  imperativeFormal: Word('допойте', 3),
  imperfect: [],
};

perfectVerbs.set(допеть.name.text, допеть);

export { допеть };