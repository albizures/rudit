import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тянуть: PerfectVerb = {
  name: Word('тянуть', 3),
  singular1stPerson: Word('тяну', 3),
  singular2ndPerson: Word('тянешь', 1),
  singular3rdPerson: Word('тянет', 1),
  plural1stPerson: Word('тянем', 1),
  plural2ndPerson: Word('тянете', 1),
  plural3rdPerson: Word('тянут', 1),
  masculinePast: Word('тянул', 3),
  femininePast: Word('тянула', 3),
  neuterPast: Word('тянуло', 3),
  pluralPast: Word('тянули', 3),
  imperativeInformal: Word('тяни', 3),
  imperativeFormal: Word('тяните', 3),
  imperfect: ['потянуть'],
};

perfectVerbs.set(тянуть.name.text, тянуть);

export { тянуть };