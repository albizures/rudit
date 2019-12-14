import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напасть: PerfectVerb = {
  name: Word('напасть', 3),
  singular1stPerson: Word('нападу', 5),
  singular2ndPerson: Word('нападёшь', 1),
  singular3rdPerson: Word('нападёт', 1),
  plural1stPerson: Word('нападём', 1),
  plural2ndPerson: Word('нападёте', 1),
  plural3rdPerson: Word('нападут', 5),
  masculinePast: Word('напал', 3),
  femininePast: Word('напала', 3),
  neuterPast: Word('напало', 3),
  pluralPast: Word('напали', 3),
  imperativeInformal: Word('напади', 5),
  imperativeFormal: Word('нападите', 5),
  imperfect: ['нападать'],
};

perfectVerbs.set(напасть.name.text, напасть);

export { напасть };