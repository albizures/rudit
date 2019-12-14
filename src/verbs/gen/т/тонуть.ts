import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тонуть: PerfectVerb = {
  name: Word('тонуть', 3),
  singular1stPerson: Word('тону', 3),
  singular2ndPerson: Word('тонешь', 1),
  singular3rdPerson: Word('тонет', 1),
  plural1stPerson: Word('тонем', 1),
  plural2ndPerson: Word('тонете', 1),
  plural3rdPerson: Word('тонут', 1),
  masculinePast: Word('тонул', 3),
  femininePast: Word('тонула', 3),
  neuterPast: Word('тонуло', 3),
  pluralPast: Word('тонули', 3),
  imperativeInformal: Word('тони', 3),
  imperativeFormal: Word('тоните', 3),
  imperfect: ['потонуть','затонуть','утонуть'],
};

perfectVerbs.set(тонуть.name.text, тонуть);

export { тонуть };