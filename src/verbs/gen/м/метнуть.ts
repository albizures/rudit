import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const метнуть: PerfectVerb = {
  name: Word('метнуть', 4),
  singular1stPerson: Word('метну', 4),
  singular2ndPerson: Word('метнёшь', 4),
  singular3rdPerson: Word('метнёт', 4),
  plural1stPerson: Word('метнём', 4),
  plural2ndPerson: Word('метнёте', 4),
  plural3rdPerson: Word('метнут', 4),
  masculinePast: Word('метнул', 4),
  femininePast: Word('метнула', 4),
  neuterPast: Word('метнуло', 4),
  pluralPast: Word('метнули', 4),
  imperativeInformal: Word('метни', 4),
  imperativeFormal: Word('метните', 4),
  imperfect: [],
};

perfectVerbs.set(метнуть.name.text, метнуть);

export { метнуть };