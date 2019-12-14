import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыкнуть: PerfectVerb = {
  name: Word('рыкнуть', 4),
  singular1stPerson: Word('рыкну', 4),
  singular2ndPerson: Word('рыкнёшь', 4),
  singular3rdPerson: Word('рыкнёт', 4),
  plural1stPerson: Word('рыкнём', 4),
  plural2ndPerson: Word('рыкнёте', 6),
  plural3rdPerson: Word('рыкнут', 4),
  masculinePast: Word('рыкнул', 4),
  femininePast: Word('рыкнула', 4),
  neuterPast: Word('рыкнуло', 4),
  pluralPast: Word('рыкнули', 4),
  imperativeInformal: Word('рыкни', 4),
  imperativeFormal: Word('рыкните', 4),
  imperfect: [],
};

perfectVerbs.set(рыкнуть.name.text, рыкнуть);

export { рыкнуть };