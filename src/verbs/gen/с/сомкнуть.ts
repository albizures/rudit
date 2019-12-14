import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сомкнуть: PerfectVerb = {
  name: Word('сомкнуть', 5),
  singular1stPerson: Word('сомкну', 5),
  singular2ndPerson: Word('сомкнёшь', 1),
  singular3rdPerson: Word('сомкнёт', 1),
  plural1stPerson: Word('сомкнём', 1),
  plural2ndPerson: Word('сомкнёте', 7),
  plural3rdPerson: Word('сомкнут', 5),
  masculinePast: Word('сомкнул', 5),
  femininePast: Word('сомкнула', 5),
  neuterPast: Word('сомкнуло', 5),
  pluralPast: Word('сомкнули', 5),
  imperativeInformal: Word('сомкни', 5),
  imperativeFormal: Word('сомкните', 5),
  imperfect: [],
};

perfectVerbs.set(сомкнуть.name.text, сомкнуть);

export { сомкнуть };