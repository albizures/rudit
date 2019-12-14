import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогнуть: PerfectVerb = {
  name: Word('обогнуть', 5),
  singular1stPerson: Word('обогну', 5),
  singular2ndPerson: Word('обогнёшь', 0),
  singular3rdPerson: Word('обогнёт', 0),
  plural1stPerson: Word('обогнём', 0),
  plural2ndPerson: Word('обогнёте', 7),
  plural3rdPerson: Word('обогнут', 5),
  masculinePast: Word('обогнул', 5),
  femininePast: Word('обогнула', 5),
  neuterPast: Word('обогнуло', 5),
  pluralPast: Word('обогнули', 5),
  imperativeInformal: Word('обогни', 5),
  imperativeFormal: Word('обогните', 5),
  imperfect: [],
};

perfectVerbs.set(обогнуть.name.text, обогнуть);

export { обогнуть };