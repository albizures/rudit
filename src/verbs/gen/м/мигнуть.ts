import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мигнуть: PerfectVerb = {
  name: Word('мигнуть', 4),
  singular1stPerson: Word('мигну', 4),
  singular2ndPerson: Word('мигнёшь', 4),
  singular3rdPerson: Word('мигнёт', 4),
  plural1stPerson: Word('мигнём', 4),
  plural2ndPerson: Word('мигнёте', 4),
  plural3rdPerson: Word('мигнут', 4),
  masculinePast: Word('мигнул', 4),
  femininePast: Word('мигнула', 4),
  neuterPast: Word('мигнуло', 4),
  pluralPast: Word('мигнули', 4),
  imperativeInformal: Word('мигни', 4),
  imperativeFormal: Word('мигните', 4),
  imperfect: [],
};

perfectVerbs.set(мигнуть.name.text, мигнуть);

export { мигнуть };