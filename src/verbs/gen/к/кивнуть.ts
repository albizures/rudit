import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кивнуть: PerfectVerb = {
  name: Word('кивнуть', 4),
  singular1stPerson: Word('кивну', 4),
  singular2ndPerson: Word('кивнёшь', 4),
  singular3rdPerson: Word('кивнёт', 4),
  plural1stPerson: Word('кивнём', 4),
  plural2ndPerson: Word('кивнёте', 4),
  plural3rdPerson: Word('кивнут', 4),
  masculinePast: Word('кивнул', 4),
  femininePast: Word('кивнула', 4),
  neuterPast: Word('кивнуло', 4),
  pluralPast: Word('кивнули', 4),
  imperativeInformal: Word('кивни', 4),
  imperativeFormal: Word('кивните', 4),
  imperfect: ['кивать'],
};

perfectVerbs.set(кивнуть.name.text, кивнуть);

export { кивнуть };