import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдохнуть: PerfectVerb = {
  name: Word('отдохнуть', 6),
  singular1stPerson: Word('отдохну', 6),
  singular2ndPerson: Word('отдохнёшь', 0),
  singular3rdPerson: Word('отдохнёт', 0),
  plural1stPerson: Word('отдохнём', 0),
  plural2ndPerson: Word('отдохнёте', 8),
  plural3rdPerson: Word('отдохнут', 6),
  masculinePast: Word('отдохнул', 6),
  femininePast: Word('отдохнула', 6),
  neuterPast: Word('отдохнуло', 6),
  pluralPast: Word('отдохнули', 6),
  imperativeInformal: Word('отдохни', 6),
  imperativeFormal: Word('отдохните', 6),
  imperfect: ['отдыхать'],
};

perfectVerbs.set(отдохнуть.name.text, отдохнуть);

export { отдохнуть };