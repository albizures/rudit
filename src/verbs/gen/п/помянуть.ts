import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помянуть: PerfectVerb = {
  name: Word('помянуть', 5),
  singular1stPerson: Word('помяну', 5),
  singular2ndPerson: Word('помянешь', 3),
  singular3rdPerson: Word('помянет', 3),
  plural1stPerson: Word('помянем', 3),
  plural2ndPerson: Word('помянете', 3),
  plural3rdPerson: Word('помянут', 3),
  masculinePast: Word('помянул', 5),
  femininePast: Word('помянула', 5),
  neuterPast: Word('помянуло', 5),
  pluralPast: Word('помянули', 5),
  imperativeInformal: Word('помяни', 5),
  imperativeFormal: Word('помяните', 5),
  imperfect: [],
};

perfectVerbs.set(помянуть.name.text, помянуть);

export { помянуть };