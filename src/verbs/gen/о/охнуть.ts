import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охнуть: PerfectVerb = {
  name: Word('охнуть', 0),
  singular1stPerson: Word('охну', 0),
  singular2ndPerson: Word('охнешь', 0),
  singular3rdPerson: Word('охнет', 0),
  plural1stPerson: Word('охнем', 0),
  plural2ndPerson: Word('охнете', 0),
  plural3rdPerson: Word('охнут', 0),
  masculinePast: Word('охнул', 0),
  femininePast: Word('охнула', 0),
  neuterPast: Word('охнуло', 0),
  pluralPast: Word('охнули', 0),
  imperativeInformal: Word('охни', 0),
  imperativeFormal: Word('охните', 0),
  imperfect: [],
};

perfectVerbs.set(охнуть.name.text, охнуть);

export { охнуть };