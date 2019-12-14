import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддёрнуть: PerfectVerb = {
  name: Word('поддёрнуть', 4),
  singular1stPerson: Word('поддёрну', 4),
  singular2ndPerson: Word('поддёрнешь', 4),
  singular3rdPerson: Word('поддёрнет', 4),
  plural1stPerson: Word('поддёрнем', 4),
  plural2ndPerson: Word('поддёрнете', 4),
  plural3rdPerson: Word('поддёрнут', 4),
  masculinePast: Word('поддёрнул', 4),
  femininePast: Word('поддёрнула', 4),
  neuterPast: Word('поддёрнуло', 4),
  pluralPast: Word('поддёрнули', 4),
  imperativeInformal: Word('поддёрни', 4),
  imperativeFormal: Word('поддёрните', 4),
  imperfect: [],
};

perfectVerbs.set(поддёрнуть.name.text, поддёрнуть);

export { поддёрнуть };