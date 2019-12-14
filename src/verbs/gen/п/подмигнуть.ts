import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмигнуть: PerfectVerb = {
  name: Word('подмигнуть', 7),
  singular1stPerson: Word('подмигну', 7),
  singular2ndPerson: Word('подмигнёшь', 4),
  singular3rdPerson: Word('подмигнёт', 4),
  plural1stPerson: Word('подмигнём', 4),
  plural2ndPerson: Word('подмигнёте', 9),
  plural3rdPerson: Word('подмигнут', 7),
  masculinePast: Word('подмигнул', 7),
  femininePast: Word('подмигнула', 7),
  neuterPast: Word('подмигнуло', 7),
  pluralPast: Word('подмигнули', 7),
  imperativeInformal: Word('подмигни', 7),
  imperativeFormal: Word('подмигните', 7),
  imperfect: [],
};

perfectVerbs.set(подмигнуть.name.text, подмигнуть);

export { подмигнуть };