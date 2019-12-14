import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звякнуть: PerfectVerb = {
  name: Word('звякнуть', 2),
  singular1stPerson: Word('звякну', 2),
  singular2ndPerson: Word('звякнешь', 2),
  singular3rdPerson: Word('звякнет', 2),
  plural1stPerson: Word('звякнем', 2),
  plural2ndPerson: Word('звякнете', 2),
  plural3rdPerson: Word('звякнут', 2),
  masculinePast: Word('звякнул', 2),
  femininePast: Word('звякнула', 2),
  neuterPast: Word('звякнуло', 2),
  pluralPast: Word('звякнули', 2),
  imperativeInformal: Word('звякни', 2),
  imperativeFormal: Word('звякните', 2),
  imperfect: [],
};

perfectVerbs.set(звякнуть.name.text, звякнуть);

export { звякнуть };