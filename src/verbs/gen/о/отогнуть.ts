import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогнуть: PerfectVerb = {
  name: Word('отогнуть', 5),
  singular1stPerson: Word('отогну', 5),
  singular2ndPerson: Word('отогнёшь', 5),
  singular3rdPerson: Word('отогнёт', 5),
  plural1stPerson: Word('отогнём', 5),
  plural2ndPerson: Word('отогнёте', 5),
  plural3rdPerson: Word('отогнут', 5),
  masculinePast: Word('отогнул', 5),
  femininePast: Word('отогнула', 5),
  neuterPast: Word('отогнуло', 5),
  pluralPast: Word('отогнули', 5),
  imperativeInformal: Word('отогни', 5),
  imperativeFormal: Word('отогните', 5),
  imperfect: [],
};

perfectVerbs.set(отогнуть.name.text, отогнуть);

export { отогнуть };