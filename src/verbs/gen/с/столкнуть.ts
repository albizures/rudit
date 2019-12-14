import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const столкнуть: PerfectVerb = {
  name: Word('столкнуть', 6),
  singular1stPerson: Word('столкну', 6),
  singular2ndPerson: Word('столкнёшь', 6),
  singular3rdPerson: Word('столкнёт', 6),
  plural1stPerson: Word('столкнём', 6),
  plural2ndPerson: Word('столкнёте', 6),
  plural3rdPerson: Word('столкнут', 6),
  masculinePast: Word('столкнул', 6),
  femininePast: Word('столкнула', 6),
  neuterPast: Word('столкнуло', 6),
  pluralPast: Word('столкнули', 6),
  imperativeInformal: Word('столкни', 6),
  imperativeFormal: Word('столкните', 6),
  imperfect: [],
};

perfectVerbs.set(столкнуть.name.text, столкнуть);

export { столкнуть };