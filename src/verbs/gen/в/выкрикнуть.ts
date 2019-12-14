import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрикнуть: PerfectVerb = {
  name: Word('выкрикнуть', 1),
  singular1stPerson: Word('выкрикну', 1),
  singular2ndPerson: Word('выкрикнешь', 1),
  singular3rdPerson: Word('выкрикнет', 1),
  plural1stPerson: Word('выкрикнем', 1),
  plural2ndPerson: Word('выкрикнете', 1),
  plural3rdPerson: Word('выкрикнут', 1),
  masculinePast: Word('выкрикнул', 1),
  femininePast: Word('выкрикнула', 1),
  neuterPast: Word('выкрикнуло', 1),
  pluralPast: Word('выкрикнули', 1),
  imperativeInformal: Word('выкрикни', 1),
  imperativeFormal: Word('выкрикните', 1),
  imperfect: [],
};

perfectVerbs.set(выкрикнуть.name.text, выкрикнуть);

export { выкрикнуть };