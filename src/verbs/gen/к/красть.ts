import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const красть: PerfectVerb = {
  name: Word('красть', 2),
  singular1stPerson: Word('краду', 4),
  singular2ndPerson: Word('крадёшь', 4),
  singular3rdPerson: Word('крадёт', 4),
  plural1stPerson: Word('крадём', 4),
  plural2ndPerson: Word('крадёте', 4),
  plural3rdPerson: Word('крадут', 4),
  masculinePast: Word('крал', 2),
  femininePast: Word('крала', 2),
  neuterPast: Word('крало', 2),
  pluralPast: Word('крали', 2),
  imperativeInformal: Word('кради', 4),
  imperativeFormal: Word('крадите', 4),
  imperfect: ['украсть'],
};

perfectVerbs.set(красть.name.text, красть);

export { красть };