import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кокнуть: PerfectVerb = {
  name: Word('кокнуть', 1),
  singular1stPerson: Word('кокну', 1),
  singular2ndPerson: Word('кокнешь', 1),
  singular3rdPerson: Word('кокнет', 1),
  plural1stPerson: Word('кокнем', 1),
  plural2ndPerson: Word('кокнете', 1),
  plural3rdPerson: Word('кокнут', 1),
  masculinePast: Word('кокнул', 1),
  femininePast: Word('кокнула', 1),
  neuterPast: Word('кокнуло', 1),
  pluralPast: Word('кокнули', 1),
  imperativeInformal: Word('кокни', 1),
  imperativeFormal: Word('кокните', 1),
  imperfect: [],
};

perfectVerbs.set(кокнуть.name.text, кокнуть);

export { кокнуть };