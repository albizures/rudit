import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдёрнуть: PerfectVerb = {
  name: Word('сдёрнуть', 5),
  singular1stPerson: Word('сдёрну', 5),
  singular2ndPerson: Word('сдёрнешь', 5),
  singular3rdPerson: Word('сдёрнет', 5),
  plural1stPerson: Word('сдёрнем', 5),
  plural2ndPerson: Word('сдёрнете', 5),
  plural3rdPerson: Word('сдёрнут', 5),
  masculinePast: Word('сдёрнул', 5),
  femininePast: Word('сдёрнула', 7),
  neuterPast: Word('сдёрнуло', 7),
  pluralPast: Word('сдёрнули', 7),
  imperativeInformal: Word('сдёрни', 5),
  imperativeFormal: Word('сдёрните', 7),
  imperfect: [],
};

perfectVerbs.set(сдёрнуть.name.text, сдёрнуть);

export { сдёрнуть };