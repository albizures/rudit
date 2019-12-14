import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выглянуть: PerfectVerb = {
  name: Word('выглянуть', 1),
  singular1stPerson: Word('выгляну', 1),
  singular2ndPerson: Word('выглянешь', 1),
  singular3rdPerson: Word('выглянет', 1),
  plural1stPerson: Word('выглянем', 1),
  plural2ndPerson: Word('выглянете', 1),
  plural3rdPerson: Word('выглянут', 1),
  masculinePast: Word('выглянул', 1),
  femininePast: Word('выглянула', 1),
  neuterPast: Word('выглянуло', 1),
  pluralPast: Word('выглянули', 1),
  imperativeInformal: Word('выгляни', 1),
  imperativeFormal: Word('выгляните', 1),
  imperfect: [],
};

perfectVerbs.set(выглянуть.name.text, выглянуть);

export { выглянуть };