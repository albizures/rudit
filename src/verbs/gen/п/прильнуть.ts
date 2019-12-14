import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прильнуть: PerfectVerb = {
  name: Word('прильнуть', 6),
  singular1stPerson: Word('прильну', 6),
  singular2ndPerson: Word('прильнёшь', 6),
  singular3rdPerson: Word('прильнёт', 6),
  plural1stPerson: Word('прильнём', 6),
  plural2ndPerson: Word('прильнёте', 6),
  plural3rdPerson: Word('прильнут', 6),
  masculinePast: Word('прильнул', 6),
  femininePast: Word('прильнула', 6),
  neuterPast: Word('прильнуло', 6),
  pluralPast: Word('прильнули', 6),
  imperativeInformal: Word('прильни', 6),
  imperativeFormal: Word('прильните', 6),
  imperfect: [],
};

perfectVerbs.set(прильнуть.name.text, прильнуть);

export { прильнуть };