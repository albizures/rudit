import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шагнуть: PerfectVerb = {
  name: Word('шагнуть', 4),
  singular1stPerson: Word('шагну', 4),
  singular2ndPerson: Word('шагнёшь', 1),
  singular3rdPerson: Word('шагнёт', 1),
  plural1stPerson: Word('шагнём', 1),
  plural2ndPerson: Word('шагнёте', 1),
  plural3rdPerson: Word('шагнут', 4),
  masculinePast: Word('шагнул', 4),
  femininePast: Word('шагнула', 4),
  neuterPast: Word('шагнуло', 4),
  pluralPast: Word('шагнули', 4),
  imperativeInformal: Word('шагни', 4),
  imperativeFormal: Word('шагните', 4),
  imperfect: [],
};

perfectVerbs.set(шагнуть.name.text, шагнуть);

export { шагнуть };