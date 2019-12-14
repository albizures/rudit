import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посягнуть: PerfectVerb = {
  name: Word('посягнуть', 6),
  singular1stPerson: Word('посягну', 6),
  singular2ndPerson: Word('посягнёшь', 6),
  singular3rdPerson: Word('посягнёт', 6),
  plural1stPerson: Word('посягнём', 6),
  plural2ndPerson: Word('посягнёте', 6),
  plural3rdPerson: Word('посягнут', 6),
  masculinePast: Word('посягнул', 6),
  femininePast: Word('посягнула', 6),
  neuterPast: Word('посягнуло', 6),
  pluralPast: Word('посягнули', 6),
  imperativeInformal: Word('посягни', 6),
  imperativeFormal: Word('посягните', 6),
  imperfect: [],
};

perfectVerbs.set(посягнуть.name.text, посягнуть);

export { посягнуть };