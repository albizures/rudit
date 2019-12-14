import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припасть: PerfectVerb = {
  name: Word('припасть', 4),
  singular1stPerson: Word('припаду', 6),
  singular2ndPerson: Word('припадёшь', 6),
  singular3rdPerson: Word('припадёт', 6),
  plural1stPerson: Word('припадём', 6),
  plural2ndPerson: Word('припадёте', 6),
  plural3rdPerson: Word('припадут', 6),
  masculinePast: Word('припал', 4),
  femininePast: Word('припала', 4),
  neuterPast: Word('припало', 4),
  pluralPast: Word('припали', 4),
  imperativeInformal: Word('припади', 6),
  imperativeFormal: Word('припадите', 6),
  imperfect: [],
};

perfectVerbs.set(припасть.name.text, припасть);

export { припасть };