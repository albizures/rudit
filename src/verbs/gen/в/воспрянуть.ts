import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспрянуть: PerfectVerb = {
  name: Word('воспрянуть', 5),
  singular1stPerson: Word('воспряну', 5),
  singular2ndPerson: Word('воспрянешь', 5),
  singular3rdPerson: Word('воспрянет', 5),
  plural1stPerson: Word('воспрянем', 5),
  plural2ndPerson: Word('воспрянете', 5),
  plural3rdPerson: Word('воспрянут', 5),
  masculinePast: Word('воспрянул', 5),
  femininePast: Word('воспрянула', 5),
  neuterPast: Word('воспрянуло', 5),
  pluralPast: Word('воспрянули', 5),
  imperativeInformal: Word('воспрянь', 5),
  imperativeFormal: Word('воспряньте', 5),
  imperfect: [],
};

perfectVerbs.set(воспрянуть.name.text, воспрянуть);

export { воспрянуть };