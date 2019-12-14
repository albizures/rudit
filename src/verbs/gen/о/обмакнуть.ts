import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмакнуть: PerfectVerb = {
  name: Word('обмакнуть', 6),
  singular1stPerson: Word('обмакну', 6),
  singular2ndPerson: Word('обмакнёшь', 3),
  singular3rdPerson: Word('обмакнёт', 3),
  plural1stPerson: Word('обмакнём', 3),
  plural2ndPerson: Word('обмакнёте', 3),
  plural3rdPerson: Word('обмакнут', 6),
  masculinePast: Word('обмакнул', 6),
  femininePast: Word('обмакнула', 6),
  neuterPast: Word('обмакнуло', 6),
  pluralPast: Word('обмакнули', 6),
  imperativeInformal: Word('обмакни', 6),
  imperativeFormal: Word('обмакните', 6),
  imperfect: [],
};

perfectVerbs.set(обмакнуть.name.text, обмакнуть);

export { обмакнуть };