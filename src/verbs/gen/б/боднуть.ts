import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const боднуть: PerfectVerb = {
  name: Word('боднуть', 4),
  singular1stPerson: Word('бодну', 4),
  singular2ndPerson: Word('боднёшь', 1),
  singular3rdPerson: Word('боднёт', 1),
  plural1stPerson: Word('боднём', 1),
  plural2ndPerson: Word('боднёте', 6),
  plural3rdPerson: Word('боднут', 4),
  masculinePast: Word('боднул', 4),
  femininePast: Word('боднула', 4),
  neuterPast: Word('боднуло', 4),
  pluralPast: Word('боднули', 4),
  imperativeInformal: Word('бодни', 4),
  imperativeFormal: Word('бодните', 4),
  imperfect: [],
};

perfectVerbs.set(боднуть.name.text, боднуть);

export { боднуть };