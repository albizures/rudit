import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согнуть: PerfectVerb = {
  name: Word('согнуть', 4),
  singular1stPerson: Word('согну', 4),
  singular2ndPerson: Word('согнёшь', 4),
  singular3rdPerson: Word('согнёт', 4),
  plural1stPerson: Word('согнём', 4),
  plural2ndPerson: Word('согнёте', 4),
  plural3rdPerson: Word('согнут', 4),
  masculinePast: Word('согнул', 4),
  femininePast: Word('согнула', 4),
  neuterPast: Word('согнуло', 4),
  pluralPast: Word('согнули', 4),
  imperativeInformal: Word('согни', 4),
  imperativeFormal: Word('согните', 4),
  imperfect: ['гнуть','сгибать'],
};

perfectVerbs.set(согнуть.name.text, согнуть);

export { согнуть };