import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лизнуть: PerfectVerb = {
  name: Word('лизнуть', 4),
  singular1stPerson: Word('лизну', 4),
  singular2ndPerson: Word('лизнёшь', 1),
  singular3rdPerson: Word('лизнёт', 1),
  plural1stPerson: Word('лизнём', 1),
  plural2ndPerson: Word('лизнёте', 6),
  plural3rdPerson: Word('лизнут', 4),
  masculinePast: Word('лизнул', 4),
  femininePast: Word('лизнула', 4),
  neuterPast: Word('лизнуло', 4),
  pluralPast: Word('лизнули', 4),
  imperativeInformal: Word('лизни', 4),
  imperativeFormal: Word('лизните', 4),
  imperfect: ['лизать'],
};

perfectVerbs.set(лизнуть.name.text, лизнуть);

export { лизнуть };