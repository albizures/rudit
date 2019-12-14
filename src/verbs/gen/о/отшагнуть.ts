import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшагнуть: PerfectVerb = {
  name: Word('отшагнуть', 6),
  singular1stPerson: Word('отшагну', 6),
  singular2ndPerson: Word('отшагнёшь', 6),
  singular3rdPerson: Word('отшагнёт', 6),
  plural1stPerson: Word('отшагнём', 6),
  plural2ndPerson: Word('отшагнёте', 6),
  plural3rdPerson: Word('отшагнут', 6),
  masculinePast: Word('отшагнул', 6),
  femininePast: Word('отшагнула', 6),
  neuterPast: Word('отшагнуло', 6),
  pluralPast: Word('отшагнули', 6),
  imperativeInformal: Word('отшагни', 6),
  imperativeFormal: Word('отшагните', 6),
  imperfect: [],
};

perfectVerbs.set(отшагнуть.name.text, отшагнуть);

export { отшагнуть };