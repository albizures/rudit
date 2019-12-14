import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтолкнуть: PerfectVerb = {
  name: Word('подтолкнуть', 8),
  singular1stPerson: Word('подтолкну', 8),
  singular2ndPerson: Word('подтолкнёшь', 1),
  singular3rdPerson: Word('подтолкнёт', 1),
  plural1stPerson: Word('подтолкнём', 1),
  plural2ndPerson: Word('подтолкнёте', 10),
  plural3rdPerson: Word('подтолкнут', 8),
  masculinePast: Word('подтолкнул', 8),
  femininePast: Word('подтолкнула', 8),
  neuterPast: Word('подтолкнуло', 8),
  pluralPast: Word('подтолкнули', 8),
  imperativeInformal: Word('подтолкни', 8),
  imperativeFormal: Word('подтолкните', 8),
  imperfect: [],
};

perfectVerbs.set(подтолкнуть.name.text, подтолкнуть);

export { подтолкнуть };