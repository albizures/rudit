import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогнуть: PerfectVerb = {
  name: Word('прогнуть', 5),
  singular1stPerson: Word('прогну', 5),
  singular2ndPerson: Word('прогнёшь', 2),
  singular3rdPerson: Word('прогнёт', 2),
  plural1stPerson: Word('прогнём', 2),
  plural2ndPerson: Word('прогнёте', 7),
  plural3rdPerson: Word('прогнут', 5),
  masculinePast: Word('прогнул', 5),
  femininePast: Word('прогнула', 5),
  neuterPast: Word('прогнуло', 5),
  pluralPast: Word('прогнули', 5),
  imperativeInformal: Word('прогни', 5),
  imperativeFormal: Word('прогните', 5),
  imperfect: [],
};

perfectVerbs.set(прогнуть.name.text, прогнуть);

export { прогнуть };