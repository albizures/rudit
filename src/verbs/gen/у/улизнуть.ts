import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улизнуть: PerfectVerb = {
  name: Word('улизнуть', 5),
  singular1stPerson: Word('улизну', 5),
  singular2ndPerson: Word('улизнёшь', 2),
  singular3rdPerson: Word('улизнёт', 2),
  plural1stPerson: Word('улизнём', 2),
  plural2ndPerson: Word('улизнёте', 7),
  plural3rdPerson: Word('улизнут', 5),
  masculinePast: Word('улизнул', 5),
  femininePast: Word('улизнула', 5),
  neuterPast: Word('улизнуло', 5),
  pluralPast: Word('улизнули', 5),
  imperativeInformal: Word('улизни', 5),
  imperativeFormal: Word('улизните', 5),
  imperfect: [],
};

perfectVerbs.set(улизнуть.name.text, улизнуть);

export { улизнуть };