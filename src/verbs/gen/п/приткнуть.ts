import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приткнуть: PerfectVerb = {
  name: Word('приткнуть', 6),
  singular1stPerson: Word('приткну', 6),
  singular2ndPerson: Word('приткнёшь', 2),
  singular3rdPerson: Word('приткнёт', 2),
  plural1stPerson: Word('приткнём', 2),
  plural2ndPerson: Word('приткнёте', 8),
  plural3rdPerson: Word('приткнут', 6),
  masculinePast: Word('приткнул', 6),
  femininePast: Word('приткнула', 6),
  neuterPast: Word('приткнуло', 6),
  pluralPast: Word('приткнули', 6),
  imperativeInformal: Word('приткни', 6),
  imperativeFormal: Word('приткните', 6),
  imperfect: [],
};

perfectVerbs.set(приткнуть.name.text, приткнуть);

export { приткнуть };