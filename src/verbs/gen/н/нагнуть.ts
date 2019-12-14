import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагнуть: PerfectVerb = {
  name: Word('нагнуть', 4),
  singular1stPerson: Word('нагну', 4),
  singular2ndPerson: Word('нагнёшь', 1),
  singular3rdPerson: Word('нагнёт', 1),
  plural1stPerson: Word('нагнём', 1),
  plural2ndPerson: Word('нагнёте', 1),
  plural3rdPerson: Word('нагнут', 4),
  masculinePast: Word('нагнул', 4),
  femininePast: Word('нагнула', 4),
  neuterPast: Word('нагнуло', 4),
  pluralPast: Word('нагнули', 4),
  imperativeInformal: Word('нагни', 4),
  imperativeFormal: Word('нагните', 4),
  imperfect: [],
};

perfectVerbs.set(нагнуть.name.text, нагнуть);

export { нагнуть };