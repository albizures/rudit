import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ковырнуть: PerfectVerb = {
  name: Word('ковырнуть', 6),
  singular1stPerson: Word('ковырну', 6),
  singular2ndPerson: Word('ковырнёшь', 6),
  singular3rdPerson: Word('ковырнёт', 6),
  plural1stPerson: Word('ковырнём', 6),
  plural2ndPerson: Word('ковырнёте', 6),
  plural3rdPerson: Word('ковырнут', 6),
  masculinePast: Word('ковырнул', 6),
  femininePast: Word('ковырнула', 6),
  neuterPast: Word('ковырнуло', 6),
  pluralPast: Word('ковырнули', 6),
  imperativeInformal: Word('ковырни', 6),
  imperativeFormal: Word('ковырните', 6),
  imperfect: [],
};

perfectVerbs.set(ковырнуть.name.text, ковырнуть);

export { ковырнуть };