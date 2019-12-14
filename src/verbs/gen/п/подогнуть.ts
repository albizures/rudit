import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подогнуть: PerfectVerb = {
  name: Word('подогнуть', 6),
  singular1stPerson: Word('подогну', 6),
  singular2ndPerson: Word('подогнёшь', 1),
  singular3rdPerson: Word('подогнёт', 1),
  plural1stPerson: Word('подогнём', 1),
  plural2ndPerson: Word('подогнёте', 8),
  plural3rdPerson: Word('подогнут', 6),
  masculinePast: Word('подогнул', 6),
  femininePast: Word('подогнула', 6),
  neuterPast: Word('подогнуло', 6),
  pluralPast: Word('подогнули', 6),
  imperativeInformal: Word('подогни', 6),
  imperativeFormal: Word('подогните', 6),
  imperfect: [],
};

perfectVerbs.set(подогнуть.name.text, подогнуть);

export { подогнуть };