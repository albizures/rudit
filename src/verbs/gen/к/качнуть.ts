import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const качнуть: PerfectVerb = {
  name: Word('качнуть', 4),
  singular1stPerson: Word('качну', 4),
  singular2ndPerson: Word('качнёшь', 1),
  singular3rdPerson: Word('качнёт', 1),
  plural1stPerson: Word('качнём', 1),
  plural2ndPerson: Word('качнёте', 1),
  plural3rdPerson: Word('качнут', 4),
  masculinePast: Word('качнул', 4),
  femininePast: Word('качнула', 4),
  neuterPast: Word('качнуло', 4),
  pluralPast: Word('качнули', 4),
  imperativeInformal: Word('качни', 4),
  imperativeFormal: Word('качните', 4),
  imperfect: [],
};

perfectVerbs.set(качнуть.name.text, качнуть);

export { качнуть };