import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдёрнуть: PerfectVerb = {
  name: Word('сдёрнуть', 2),
  singular1stPerson: Word('сдёрну', 2),
  singular2ndPerson: Word('сдёрнешь', 2),
  singular3rdPerson: Word('сдёрнет', 2),
  plural1stPerson: Word('сдёрнем', 2),
  plural2ndPerson: Word('сдёрнете', 2),
  plural3rdPerson: Word('сдёрнут', 2),
  masculinePast: Word('сдёрнул', 2),
  femininePast: Word('сдёрнула', 2),
  neuterPast: Word('сдёрнуло', 2),
  pluralPast: Word('сдёрнули', 2),
  imperativeInformal: Word('сдёрни', 2),
  imperativeFormal: Word('сдёрните', 2),
  imperfect: [],
};

perfectVerbs.set(сдёрнуть.name.text, сдёрнуть);

export { сдёрнуть };