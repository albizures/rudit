import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шепнуть: PerfectVerb = {
  name: Word('шепнуть', 4),
  singular1stPerson: Word('шепну', 4),
  singular2ndPerson: Word('шепнёшь', 1),
  singular3rdPerson: Word('шепнёт', 1),
  plural1stPerson: Word('шепнём', 1),
  plural2ndPerson: Word('шепнёте', 1),
  plural3rdPerson: Word('шепнут', 4),
  masculinePast: Word('шепнул', 4),
  femininePast: Word('шепнула', 4),
  neuterPast: Word('шепнуло', 4),
  pluralPast: Word('шепнули', 4),
  imperativeInformal: Word('шепни', 4),
  imperativeFormal: Word('шепните', 4),
  imperfect: ['шептать'],
};

perfectVerbs.set(шепнуть.name.text, шепнуть);

export { шепнуть };