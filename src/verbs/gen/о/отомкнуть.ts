import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отомкнуть: PerfectVerb = {
  name: Word('отомкнуть', 6),
  singular1stPerson: Word('отомкну', 6),
  singular2ndPerson: Word('отомкнёшь', 0),
  singular3rdPerson: Word('отомкнёт', 0),
  plural1stPerson: Word('отомкнём', 0),
  plural2ndPerson: Word('отомкнёте', 8),
  plural3rdPerson: Word('отомкнут', 6),
  masculinePast: Word('отомкнул', 6),
  femininePast: Word('отомкнула', 6),
  neuterPast: Word('отомкнуло', 6),
  pluralPast: Word('отомкнули', 6),
  imperativeInformal: Word('отомкни', 6),
  imperativeFormal: Word('отомкните', 6),
  imperfect: [],
};

perfectVerbs.set(отомкнуть.name.text, отомкнуть);

export { отомкнуть };