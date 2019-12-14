import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мазнуть: PerfectVerb = {
  name: Word('мазнуть', 4),
  singular1stPerson: Word('мазну', 4),
  singular2ndPerson: Word('мазнёшь', 4),
  singular3rdPerson: Word('мазнёт', 4),
  plural1stPerson: Word('мазнём', 4),
  plural2ndPerson: Word('мазнёте', 4),
  plural3rdPerson: Word('мазнут', 4),
  masculinePast: Word('мазнул', 4),
  femininePast: Word('мазнула', 4),
  neuterPast: Word('мазнуло', 4),
  pluralPast: Word('мазнули', 4),
  imperativeInformal: Word('мазни', 4),
  imperativeFormal: Word('мазните', 4),
  imperfect: [],
};

perfectVerbs.set(мазнуть.name.text, мазнуть);

export { мазнуть };