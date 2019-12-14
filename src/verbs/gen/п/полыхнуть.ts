import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полыхнуть: PerfectVerb = {
  name: Word('полыхнуть', 6),
  singular1stPerson: Word('полыхну', 6),
  singular2ndPerson: Word('полыхнёшь', 1),
  singular3rdPerson: Word('полыхнёт', 1),
  plural1stPerson: Word('полыхнём', 1),
  plural2ndPerson: Word('полыхнёте', 8),
  plural3rdPerson: Word('полыхнут', 6),
  masculinePast: Word('полыхнул', 6),
  femininePast: Word('полыхнула', 6),
  neuterPast: Word('полыхнуло', 6),
  pluralPast: Word('полыхнули', 6),
  imperativeInformal: Word('полыхни', 6),
  imperativeFormal: Word('полыхните', 6),
  imperfect: ['полыхать'],
};

perfectVerbs.set(полыхнуть.name.text, полыхнуть);

export { полыхнуть };