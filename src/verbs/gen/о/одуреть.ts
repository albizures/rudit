import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одуреть: PerfectVerb = {
  name: Word('одуреть', 4),
  singular1stPerson: Word('одурею', 4),
  singular2ndPerson: Word('одуреешь', 4),
  singular3rdPerson: Word('одуреет', 4),
  plural1stPerson: Word('одуреем', 4),
  plural2ndPerson: Word('одуреете', 4),
  plural3rdPerson: Word('одуреют', 4),
  masculinePast: Word('одурел', 4),
  femininePast: Word('одурела', 4),
  neuterPast: Word('одурело', 4),
  pluralPast: Word('одурели', 4),
  imperativeInformal: Word('одурей', 4),
  imperativeFormal: Word('одурейте', 4),
  imperfect: [],
};

perfectVerbs.set(одуреть.name.text, одуреть);

export { одуреть };