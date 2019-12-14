import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспасть: PerfectVerb = {
  name: Word('поспасть', 4),
  singular1stPerson: Word('поспаду', 6),
  singular2ndPerson: Word('поспадёшь', 4),
  singular3rdPerson: Word('поспадёт', 4),
  plural1stPerson: Word('поспадём', 4),
  plural2ndPerson: Word('поспадёте', 4),
  plural3rdPerson: Word('поспадут', 6),
  masculinePast: Word('поспал', 4),
  femininePast: Word('поспала', 4),
  neuterPast: Word('поспало', 4),
  pluralPast: Word('поспали', 4),
  imperativeInformal: Word('поспади', 6),
  imperativeFormal: Word('поспадите', 6),
  imperfect: [],
};

perfectVerbs.set(поспасть.name.text, поспасть);

export { поспасть };