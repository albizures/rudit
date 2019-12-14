import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тронуть: PerfectVerb = {
  name: Word('тронуть', 2),
  singular1stPerson: Word('трону', 2),
  singular2ndPerson: Word('тронешь', 2),
  singular3rdPerson: Word('тронет', 2),
  plural1stPerson: Word('тронем', 2),
  plural2ndPerson: Word('тронете', 2),
  plural3rdPerson: Word('тронут', 2),
  masculinePast: Word('тронул', 2),
  femininePast: Word('тронула', 2),
  neuterPast: Word('тронуло', 2),
  pluralPast: Word('тронули', 2),
  imperativeInformal: Word('тронь', 2),
  imperativeFormal: Word('троньте', 2),
  imperfect: ['трогать'],
};

perfectVerbs.set(тронуть.name.text, тронуть);

export { тронуть };