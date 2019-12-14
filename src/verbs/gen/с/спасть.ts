import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спасть: PerfectVerb = {
  name: Word('спасть', 2),
  singular1stPerson: Word('спаду', 4),
  singular2ndPerson: Word('спадёшь', 2),
  singular3rdPerson: Word('спадёт', 2),
  plural1stPerson: Word('спадём', 2),
  plural2ndPerson: Word('спадёте', 2),
  plural3rdPerson: Word('спадут', 4),
  masculinePast: Word('спал', 2),
  femininePast: Word('спала', 2),
  neuterPast: Word('спало', 2),
  pluralPast: Word('спали', 2),
  imperativeInformal: Word('спади', 4),
  imperativeFormal: Word('спадите', 4),
  imperfect: ['спадать'],
};

perfectVerbs.set(спасть.name.text, спасть);

export { спасть };