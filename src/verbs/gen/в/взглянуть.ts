import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взглянуть: PerfectVerb = {
  name: Word('взглянуть', 6),
  singular1stPerson: Word('взгляну', 6),
  singular2ndPerson: Word('взглянешь', 4),
  singular3rdPerson: Word('взглянет', 4),
  plural1stPerson: Word('взглянем', 4),
  plural2ndPerson: Word('взглянете', 4),
  plural3rdPerson: Word('взглянут', 4),
  masculinePast: Word('взглянул', 6),
  femininePast: Word('взглянула', 6),
  neuterPast: Word('взглянуло', 6),
  pluralPast: Word('взглянули', 6),
  imperativeInformal: Word('взгляни', 6),
  imperativeFormal: Word('взгляните', 6),
  imperfect: ['глядеть','взглядывать'],
};

perfectVerbs.set(взглянуть.name.text, взглянуть);

export { взглянуть };