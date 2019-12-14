import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагрянуть: PerfectVerb = {
  name: Word('нагрянуть', 4),
  singular1stPerson: Word('нагряну', 4),
  singular2ndPerson: Word('нагрянешь', 4),
  singular3rdPerson: Word('нагрянет', 4),
  plural1stPerson: Word('нагрянем', 4),
  plural2ndPerson: Word('нагрянете', 4),
  plural3rdPerson: Word('нагрянут', 4),
  masculinePast: Word('нагрянул', 4),
  femininePast: Word('нагрянула', 4),
  neuterPast: Word('нагрянуло', 4),
  pluralPast: Word('нагрянули', 4),
  imperativeInformal: Word('нагрянь', 4),
  imperativeFormal: Word('нагряньте', 4),
  imperfect: [],
};

perfectVerbs.set(нагрянуть.name.text, нагрянуть);

export { нагрянуть };