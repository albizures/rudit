import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почерпнуть: PerfectVerb = {
  name: Word('почерпнуть', 7),
  singular1stPerson: Word('почерпну', 7),
  singular2ndPerson: Word('почерпнёшь', 3),
  singular3rdPerson: Word('почерпнёт', 3),
  plural1stPerson: Word('почерпнём', 3),
  plural2ndPerson: Word('почерпнёте', 3),
  plural3rdPerson: Word('почерпнут', 7),
  masculinePast: Word('почерпнул', 7),
  femininePast: Word('почерпнула', 7),
  neuterPast: Word('почерпнуло', 7),
  pluralPast: Word('почерпнули', 7),
  imperativeInformal: Word('почерпни', 7),
  imperativeFormal: Word('почерпните', 7),
  imperfect: [],
};

perfectVerbs.set(почерпнуть.name.text, почерпнуть);

export { почерпнуть };