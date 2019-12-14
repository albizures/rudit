import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглянуть: PerfectVerb = {
  name: Word('заглянуть', 6),
  singular1stPerson: Word('загляну', 6),
  singular2ndPerson: Word('заглянешь', 4),
  singular3rdPerson: Word('заглянет', 4),
  plural1stPerson: Word('заглянем', 4),
  plural2ndPerson: Word('заглянете', 4),
  plural3rdPerson: Word('заглянут', 4),
  masculinePast: Word('заглянул', 6),
  femininePast: Word('заглянула', 6),
  neuterPast: Word('заглянуло', 6),
  pluralPast: Word('заглянули', 6),
  imperativeInformal: Word('загляни', 6),
  imperativeFormal: Word('загляните', 6),
  imperfect: ['заглядывать'],
};

perfectVerbs.set(заглянуть.name.text, заглянуть);

export { заглянуть };