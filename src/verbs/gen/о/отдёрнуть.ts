import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдёрнуть: PerfectVerb = {
  name: Word('отдёрнуть', 0),
  singular1stPerson: Word('отдёрну', 0),
  singular2ndPerson: Word('отдёрнешь', 6),
  singular3rdPerson: Word('отдёрнет', 6),
  plural1stPerson: Word('отдёрнем', 6),
  plural2ndPerson: Word('отдёрнете', 6),
  plural3rdPerson: Word('отдёрнут', 0),
  masculinePast: Word('отдёрнул', 0),
  femininePast: Word('отдёрнула', 8),
  neuterPast: Word('отдёрнуло', 0),
  pluralPast: Word('отдёрнули', 8),
  imperativeInformal: Word('отдёрни', 6),
  imperativeFormal: Word('отдёрните', 8),
  imperfect: [],
};

perfectVerbs.set(отдёрнуть.name.text, отдёрнуть);

export { отдёрнуть };