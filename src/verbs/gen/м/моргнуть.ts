import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const моргнуть: PerfectVerb = {
  name: Word('моргнуть', 5),
  singular1stPerson: Word('моргну', 5),
  singular2ndPerson: Word('моргнёшь', 1),
  singular3rdPerson: Word('моргнёт', 1),
  plural1stPerson: Word('моргнём', 1),
  plural2ndPerson: Word('моргнёте', 7),
  plural3rdPerson: Word('моргнут', 5),
  masculinePast: Word('моргнул', 5),
  femininePast: Word('моргнула', 5),
  neuterPast: Word('моргнуло', 5),
  pluralPast: Word('моргнули', 5),
  imperativeInformal: Word('моргни', 5),
  imperativeFormal: Word('моргните', 5),
  imperfect: [],
};

perfectVerbs.set(моргнуть.name.text, моргнуть);

export { моргнуть };