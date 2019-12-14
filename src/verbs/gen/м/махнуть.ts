import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const махнуть: PerfectVerb = {
  name: Word('махнуть', 4),
  singular1stPerson: Word('махну', 4),
  singular2ndPerson: Word('махнёшь', 4),
  singular3rdPerson: Word('махнёт', 4),
  plural1stPerson: Word('махнём', 4),
  plural2ndPerson: Word('махнёте', 4),
  plural3rdPerson: Word('махнут', 4),
  masculinePast: Word('махнул', 4),
  femininePast: Word('махнула', 4),
  neuterPast: Word('махнуло', 4),
  pluralPast: Word('махнули', 4),
  imperativeInformal: Word('махни', 4),
  imperativeFormal: Word('махните', 4),
  imperfect: ['махать'],
};

perfectVerbs.set(махнуть.name.text, махнуть);

export { махнуть };