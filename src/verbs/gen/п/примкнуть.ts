import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примкнуть: PerfectVerb = {
  name: Word('примкнуть', 6),
  singular1stPerson: Word('примкну', 6),
  singular2ndPerson: Word('примкнёшь', 2),
  singular3rdPerson: Word('примкнёт', 2),
  plural1stPerson: Word('примкнём', 2),
  plural2ndPerson: Word('примкнёте', 8),
  plural3rdPerson: Word('примкнут', 6),
  masculinePast: Word('примкнул', 6),
  femininePast: Word('примкнула', 6),
  neuterPast: Word('примкнуло', 6),
  pluralPast: Word('примкнули', 6),
  imperativeInformal: Word('примкни', 6),
  imperativeFormal: Word('примкните', 6),
  imperfect: ['примыкать'],
};

perfectVerbs.set(примкнуть.name.text, примкнуть);

export { примкнуть };