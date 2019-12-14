import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запропасть: PerfectVerb = {
  name: Word('запропасть', 6),
  singular1stPerson: Word('запропаду', 8),
  singular2ndPerson: Word('запропадёшь', 1),
  singular3rdPerson: Word('запропадёт', 1),
  plural1stPerson: Word('запропадём', 1),
  plural2ndPerson: Word('запропадёте', 1),
  plural3rdPerson: Word('запропадут', 8),
  masculinePast: Word('запропал', 6),
  femininePast: Word('запропала', 6),
  neuterPast: Word('запропало', 6),
  pluralPast: Word('запропали', 6),
  imperativeInformal: Word('запропади', 8),
  imperativeFormal: Word('запропадите', 8),
  imperfect: [],
};

perfectVerbs.set(запропасть.name.text, запропасть);

export { запропасть };