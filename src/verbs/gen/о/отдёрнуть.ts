import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдёрнуть: PerfectVerb = {
  name: Word('отдёрнуть', 3),
  singular1stPerson: Word('отдёрну', 3),
  singular2ndPerson: Word('отдёрнешь', 3),
  singular3rdPerson: Word('отдёрнет', 3),
  plural1stPerson: Word('отдёрнем', 3),
  plural2ndPerson: Word('отдёрнете', 3),
  plural3rdPerson: Word('отдёрнут', 3),
  masculinePast: Word('отдёрнул', 3),
  femininePast: Word('отдёрнула', 3),
  neuterPast: Word('отдёрнуло', 3),
  pluralPast: Word('отдёрнули', 3),
  imperativeInformal: Word('отдёрни', 3),
  imperativeFormal: Word('отдёрните', 3),
  imperfect: [],
};

perfectVerbs.set(отдёрнуть.name.text, отдёрнуть);

export { отдёрнуть };