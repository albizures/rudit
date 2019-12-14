import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попасть: PerfectVerb = {
  name: Word('попасть', 3),
  singular1stPerson: Word('попаду', 5),
  singular2ndPerson: Word('попадёшь', 5),
  singular3rdPerson: Word('попадёт', 5),
  plural1stPerson: Word('попадём', 5),
  plural2ndPerson: Word('попадёте', 5),
  plural3rdPerson: Word('попадут', 5),
  masculinePast: Word('попал', 3),
  femininePast: Word('попала', 3),
  neuterPast: Word('попало', 3),
  pluralPast: Word('попали', 3),
  imperativeInformal: Word('попади', 5),
  imperativeFormal: Word('попадите', 5),
  imperfect: ['попадать'],
};

perfectVerbs.set(попасть.name.text, попасть);

export { попасть };