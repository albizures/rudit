import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уткнуть: PerfectVerb = {
  name: Word('уткнуть', 4),
  singular1stPerson: Word('уткну', 4),
  singular2ndPerson: Word('уткнёшь', 0),
  singular3rdPerson: Word('уткнёт', 0),
  plural1stPerson: Word('уткнём', 0),
  plural2ndPerson: Word('уткнёте', 6),
  plural3rdPerson: Word('уткнут', 4),
  masculinePast: Word('уткнул', 4),
  femininePast: Word('уткнула', 4),
  neuterPast: Word('уткнуло', 4),
  pluralPast: Word('уткнули', 4),
  imperativeInformal: Word('уткни', 4),
  imperativeFormal: Word('уткните', 4),
  imperfect: [],
};

perfectVerbs.set(уткнуть.name.text, уткнуть);

export { уткнуть };