import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздохнуть: PerfectVerb = {
  name: Word('вздохнуть', 6),
  singular1stPerson: Word('вздохну', 6),
  singular2ndPerson: Word('вздохнёшь', 6),
  singular3rdPerson: Word('вздохнёт', 6),
  plural1stPerson: Word('вздохнём', 6),
  plural2ndPerson: Word('вздохнёте', 6),
  plural3rdPerson: Word('вздохнут', 6),
  masculinePast: Word('вздохнул', 6),
  femininePast: Word('вздохнула', 6),
  neuterPast: Word('вздохнуло', 6),
  pluralPast: Word('вздохнули', 6),
  imperativeInformal: Word('вздохни', 6),
  imperativeFormal: Word('вздохните', 6),
  imperfect: ['вздыхать'],
};

perfectVerbs.set(вздохнуть.name.text, вздохнуть);

export { вздохнуть };