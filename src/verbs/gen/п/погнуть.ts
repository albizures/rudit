import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погнуть: PerfectVerb = {
  name: Word('погнуть', 4),
  singular1stPerson: Word('погну', 4),
  singular2ndPerson: Word('погнёшь', 1),
  singular3rdPerson: Word('погнёт', 1),
  plural1stPerson: Word('погнём', 1),
  plural2ndPerson: Word('погнёте', 6),
  plural3rdPerson: Word('погнут', 4),
  masculinePast: Word('погнул', 4),
  femininePast: Word('погнула', 4),
  neuterPast: Word('погнуло', 4),
  pluralPast: Word('погнули', 4),
  imperativeInformal: Word('погни', 4),
  imperativeFormal: Word('погните', 4),
  imperfect: [],
};

perfectVerbs.set(погнуть.name.text, погнуть);

export { погнуть };