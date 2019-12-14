import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попереть: PerfectVerb = {
  name: Word('попереть', 5),
  singular1stPerson: Word('попру', 4),
  singular2ndPerson: Word('попрёшь', 1),
  singular3rdPerson: Word('попрёт', 1),
  plural1stPerson: Word('попрём', 1),
  plural2ndPerson: Word('попрёте', 6),
  plural3rdPerson: Word('попрут', 4),
  masculinePast: Word('попер', 3),
  femininePast: Word('поперла', 3),
  neuterPast: Word('поперло', 3),
  pluralPast: Word('поперли', 3),
  imperativeInformal: Word('попри', 4),
  imperativeFormal: Word('поприте', 4),
  imperfect: [],
};

perfectVerbs.set(попереть.name.text, попереть);

export { попереть };