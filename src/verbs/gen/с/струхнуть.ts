import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const струхнуть: PerfectVerb = {
  name: Word('струхнуть', 6),
  singular1stPerson: Word('струхну', 6),
  singular2ndPerson: Word('струхнёшь', 6),
  singular3rdPerson: Word('струхнёт', 6),
  plural1stPerson: Word('струхнём', 6),
  plural2ndPerson: Word('струхнёте', 6),
  plural3rdPerson: Word('струхнут', 6),
  masculinePast: Word('струхнул', 6),
  femininePast: Word('струхнула', 6),
  neuterPast: Word('струхнуло', 6),
  pluralPast: Word('струхнули', 6),
  imperativeInformal: Word('струхни', 6),
  imperativeFormal: Word('струхните', 6),
  imperfect: [],
};

perfectVerbs.set(струхнуть.name.text, струхнуть);

export { струхнуть };