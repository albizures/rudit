import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропасть: PerfectVerb = {
  name: Word('пропасть', 4),
  singular1stPerson: Word('пропаду', 6),
  singular2ndPerson: Word('пропадёшь', 6),
  singular3rdPerson: Word('пропадёт', 6),
  plural1stPerson: Word('пропадём', 6),
  plural2ndPerson: Word('пропадёте', 6),
  plural3rdPerson: Word('пропадут', 6),
  masculinePast: Word('пропал', 4),
  femininePast: Word('пропала', 4),
  neuterPast: Word('пропало', 4),
  pluralPast: Word('пропали', 4),
  imperativeInformal: Word('пропади', 6),
  imperativeFormal: Word('пропадите', 6),
  imperfect: ['пропадать'],
};

perfectVerbs.set(пропасть.name.text, пропасть);

export { пропасть };