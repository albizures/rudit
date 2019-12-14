import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддёрнуть: PerfectVerb = {
  name: Word('поддёрнуть', 1),
  singular1stPerson: Word('поддёрну', 1),
  singular2ndPerson: Word('поддёрнешь', 7),
  singular3rdPerson: Word('поддёрнет', 7),
  plural1stPerson: Word('поддёрнем', 7),
  plural2ndPerson: Word('поддёрнете', 7),
  plural3rdPerson: Word('поддёрнут', 1),
  masculinePast: Word('поддёрнул', 1),
  femininePast: Word('поддёрнула', 9),
  neuterPast: Word('поддёрнуло', 1),
  pluralPast: Word('поддёрнули', 9),
  imperativeInformal: Word('поддёрни', 7),
  imperativeFormal: Word('поддёрните', 9),
  imperfect: [],
};

perfectVerbs.set(поддёрнуть.name.text, поддёрнуть);

export { поддёрнуть };