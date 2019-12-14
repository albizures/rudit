import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сболтнуть: PerfectVerb = {
  name: Word('сболтнуть', 6),
  singular1stPerson: Word('сболтну', 6),
  singular2ndPerson: Word('сболтнёшь', 2),
  singular3rdPerson: Word('сболтнёт', 2),
  plural1stPerson: Word('сболтнём', 2),
  plural2ndPerson: Word('сболтнёте', 8),
  plural3rdPerson: Word('сболтнут', 6),
  masculinePast: Word('сболтнул', 6),
  femininePast: Word('сболтнула', 6),
  neuterPast: Word('сболтнуло', 6),
  pluralPast: Word('сболтнули', 6),
  imperativeInformal: Word('сболтни', 6),
  imperativeFormal: Word('сболтните', 6),
  imperfect: [],
};

perfectVerbs.set(сболтнуть.name.text, сболтнуть);

export { сболтнуть };