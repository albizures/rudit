import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпорхнуть: PerfectVerb = {
  name: Word('выпорхнуть', 1),
  singular1stPerson: Word('выпорхну', 1),
  singular2ndPerson: Word('выпорхнешь', 1),
  singular3rdPerson: Word('выпорхнет', 1),
  plural1stPerson: Word('выпорхнем', 1),
  plural2ndPerson: Word('выпорхнете', 1),
  plural3rdPerson: Word('выпорхнут', 1),
  masculinePast: Word('выпорхнул', 1),
  femininePast: Word('выпорхнула', 1),
  neuterPast: Word('выпорхнуло', 1),
  pluralPast: Word('выпорхнули', 1),
  imperativeInformal: Word('выпорхни', 1),
  imperativeFormal: Word('выпорхните', 1),
  imperfect: [],
};

perfectVerbs.set(выпорхнуть.name.text, выпорхнуть);

export { выпорхнуть };