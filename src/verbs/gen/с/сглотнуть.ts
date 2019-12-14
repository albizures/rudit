import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сглотнуть: PerfectVerb = {
  name: Word('сглотнуть', 6),
  singular1stPerson: Word('сглотну', 6),
  singular2ndPerson: Word('сглотнёшь', 3),
  singular3rdPerson: Word('сглотнёт', 3),
  plural1stPerson: Word('сглотнём', 3),
  plural2ndPerson: Word('сглотнёте', 8),
  plural3rdPerson: Word('сглотнут', 6),
  masculinePast: Word('сглотнул', 6),
  femininePast: Word('сглотнула', 6),
  neuterPast: Word('сглотнуло', 6),
  pluralPast: Word('сглотнули', 6),
  imperativeInformal: Word('сглотни', 6),
  imperativeFormal: Word('сглотните', 6),
  imperfect: [],
};

perfectVerbs.set(сглотнуть.name.text, сглотнуть);

export { сглотнуть };