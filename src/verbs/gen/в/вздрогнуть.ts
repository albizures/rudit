import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздрогнуть: PerfectVerb = {
  name: Word('вздрогнуть', 4),
  singular1stPerson: Word('вздрогну', 4),
  singular2ndPerson: Word('вздрогнешь', 4),
  singular3rdPerson: Word('вздрогнет', 4),
  plural1stPerson: Word('вздрогнем', 4),
  plural2ndPerson: Word('вздрогнете', 4),
  plural3rdPerson: Word('вздрогнут', 4),
  masculinePast: Word('вздрогнул', 4),
  femininePast: Word('вздрогнула', 4),
  neuterPast: Word('вздрогнуло', 4),
  pluralPast: Word('вздрогнули', 4),
  imperativeInformal: Word('вздрогни', 4),
  imperativeFormal: Word('вздрогните', 4),
  imperfect: ['вздрагивать'],
};

perfectVerbs.set(вздрогнуть.name.text, вздрогнуть);

export { вздрогнуть };