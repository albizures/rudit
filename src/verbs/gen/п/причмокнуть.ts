import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причмокнуть: PerfectVerb = {
  name: Word('причмокнуть', 5),
  singular1stPerson: Word('причмокну', 5),
  singular2ndPerson: Word('причмокнешь', 5),
  singular3rdPerson: Word('причмокнет', 5),
  plural1stPerson: Word('причмокнем', 5),
  plural2ndPerson: Word('причмокнете', 5),
  plural3rdPerson: Word('причмокнут', 5),
  masculinePast: Word('причмокнул', 5),
  femininePast: Word('причмокнула', 5),
  neuterPast: Word('причмокнуло', 5),
  pluralPast: Word('причмокнули', 5),
  imperativeInformal: Word('причмокни', 5),
  imperativeFormal: Word('причмокните', 5),
  imperfect: [],
};

perfectVerbs.set(причмокнуть.name.text, причмокнуть);

export { причмокнуть };