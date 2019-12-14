import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упасть: PerfectVerb = {
  name: Word('упасть', 2),
  singular1stPerson: Word('упаду', 4),
  singular2ndPerson: Word('упадёшь', 4),
  singular3rdPerson: Word('упадёт', 4),
  plural1stPerson: Word('упадём', 4),
  plural2ndPerson: Word('упадёте', 4),
  plural3rdPerson: Word('упадут', 4),
  masculinePast: Word('упал', 2),
  femininePast: Word('упала', 2),
  neuterPast: Word('упало', 2),
  pluralPast: Word('упали', 2),
  imperativeInformal: Word('упади', 4),
  imperativeFormal: Word('упадите', 4),
  imperfect: ['падать'],
};

perfectVerbs.set(упасть.name.text, упасть);

export { упасть };