import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропасть: PerfectVerb = {
  name: Word('пропасть', 4),
  singular1stPerson: Word('пропаду', 6),
  singular2ndPerson: Word('пропадёшь', 4),
  singular3rdPerson: Word('пропадёт', 4),
  plural1stPerson: Word('пропадём', 4),
  plural2ndPerson: Word('пропадёте', 4),
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