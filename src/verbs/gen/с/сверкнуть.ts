import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверкнуть: PerfectVerb = {
  name: Word('сверкнуть', 6),
  singular1stPerson: Word('сверкну', 6),
  singular2ndPerson: Word('сверкнёшь', 2),
  singular3rdPerson: Word('сверкнёт', 2),
  plural1stPerson: Word('сверкнём', 2),
  plural2ndPerson: Word('сверкнёте', 2),
  plural3rdPerson: Word('сверкнут', 6),
  masculinePast: Word('сверкнул', 6),
  femininePast: Word('сверкнула', 6),
  neuterPast: Word('сверкнуло', 6),
  pluralPast: Word('сверкнули', 6),
  imperativeInformal: Word('сверкни', 6),
  imperativeFormal: Word('сверкните', 6),
  imperfect: ['сверкать'],
};

perfectVerbs.set(сверкнуть.name.text, сверкнуть);

export { сверкнуть };