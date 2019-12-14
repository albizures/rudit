import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запихнуть: PerfectVerb = {
  name: Word('запихнуть', 6),
  singular1stPerson: Word('запихну', 6),
  singular2ndPerson: Word('запихнёшь', 6),
  singular3rdPerson: Word('запихнёт', 6),
  plural1stPerson: Word('запихнём', 6),
  plural2ndPerson: Word('запихнёте', 6),
  plural3rdPerson: Word('запихнут', 6),
  masculinePast: Word('запихнул', 6),
  femininePast: Word('запихнула', 6),
  neuterPast: Word('запихнуло', 6),
  pluralPast: Word('запихнули', 6),
  imperativeInformal: Word('запихни', 6),
  imperativeFormal: Word('запихните', 6),
  imperfect: [],
};

perfectVerbs.set(запихнуть.name.text, запихнуть);

export { запихнуть };