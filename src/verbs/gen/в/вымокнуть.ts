import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымокнуть: PerfectVerb = {
  name: Word('вымокнуть', 1),
  singular1stPerson: Word('вымокну', 1),
  singular2ndPerson: Word('вымокнешь', 1),
  singular3rdPerson: Word('вымокнет', 1),
  plural1stPerson: Word('вымокнем', 1),
  plural2ndPerson: Word('вымокнете', 1),
  plural3rdPerson: Word('вымокнут', 1),
  masculinePast: Word('вымок', 1),
  femininePast: Word('вымокла', 1),
  neuterPast: Word('вымокло', 1),
  pluralPast: Word('вымокли', 1),
  imperativeInformal: Word('вымокни', 1),
  imperativeFormal: Word('вымокните', 1),
  imperfect: [],
};

perfectVerbs.set(вымокнуть.name.text, вымокнуть);

export { вымокнуть };