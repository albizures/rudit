import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглянуть: PerfectVerb = {
  name: Word('оглянуть', 5),
  singular1stPerson: Word('огляну', 5),
  singular2ndPerson: Word('оглянешь', 3),
  singular3rdPerson: Word('оглянет', 3),
  plural1stPerson: Word('оглянем', 3),
  plural2ndPerson: Word('оглянете', 3),
  plural3rdPerson: Word('оглянут', 3),
  masculinePast: Word('оглянул', 5),
  femininePast: Word('оглянула', 5),
  neuterPast: Word('оглянуло', 5),
  pluralPast: Word('оглянули', 5),
  imperativeInformal: Word('огляни', 5),
  imperativeFormal: Word('огляните', 5),
  imperfect: [],
};

perfectVerbs.set(оглянуть.name.text, оглянуть);

export { оглянуть };