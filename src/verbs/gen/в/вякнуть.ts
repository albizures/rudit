import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вякнуть: PerfectVerb = {
  name: Word('вякнуть', 1),
  singular1stPerson: Word('вякну', 1),
  singular2ndPerson: Word('вякнешь', 1),
  singular3rdPerson: Word('вякнет', 1),
  plural1stPerson: Word('вякнем', 1),
  plural2ndPerson: Word('вякнете', 1),
  plural3rdPerson: Word('вякнут', 1),
  masculinePast: Word('вякнул', 1),
  femininePast: Word('вякнула', 1),
  neuterPast: Word('вякнуло', 1),
  pluralPast: Word('вякнули', 1),
  imperativeInformal: Word('вякни', 1),
  imperativeFormal: Word('вякните', 1),
  imperfect: [],
};

perfectVerbs.set(вякнуть.name.text, вякнуть);

export { вякнуть };