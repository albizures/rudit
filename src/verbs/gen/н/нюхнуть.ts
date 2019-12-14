import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нюхнуть: PerfectVerb = {
  name: Word('нюхнуть', 4),
  singular1stPerson: Word('нюхну', 4),
  singular2ndPerson: Word('нюхнёшь', 1),
  singular3rdPerson: Word('нюхнёт', 1),
  plural1stPerson: Word('нюхнём', 1),
  plural2ndPerson: Word('нюхнёте', 6),
  plural3rdPerson: Word('нюхнут', 4),
  masculinePast: Word('нюхнул', 4),
  femininePast: Word('нюхнула', 4),
  neuterPast: Word('нюхнуло', 4),
  pluralPast: Word('нюхнули', 4),
  imperativeInformal: Word('нюхни', 4),
  imperativeFormal: Word('нюхните', 4),
  imperfect: [],
};

perfectVerbs.set(нюхнуть.name.text, нюхнуть);

export { нюхнуть };