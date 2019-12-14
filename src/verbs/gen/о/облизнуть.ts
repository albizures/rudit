import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облизнуть: PerfectVerb = {
  name: Word('облизнуть', 6),
  singular1stPerson: Word('облизну', 6),
  singular2ndPerson: Word('облизнёшь', 6),
  singular3rdPerson: Word('облизнёт', 6),
  plural1stPerson: Word('облизнём', 6),
  plural2ndPerson: Word('облизнёте', 6),
  plural3rdPerson: Word('облизнут', 6),
  masculinePast: Word('облизнул', 6),
  femininePast: Word('облизнула', 6),
  neuterPast: Word('облизнуло', 6),
  pluralPast: Word('облизнули', 6),
  imperativeInformal: Word('облизни', 6),
  imperativeFormal: Word('облизните', 6),
  imperfect: [],
};

perfectVerbs.set(облизнуть.name.text, облизнуть);

export { облизнуть };