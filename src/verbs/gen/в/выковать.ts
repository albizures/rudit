import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выковать: PerfectVerb = {
  name: Word('выковать', 1),
  singular1stPerson: Word('выкую', 1),
  singular2ndPerson: Word('выкуешь', 1),
  singular3rdPerson: Word('выкует', 1),
  plural1stPerson: Word('выкуем', 1),
  plural2ndPerson: Word('выкуете', 1),
  plural3rdPerson: Word('выкуют', 1),
  masculinePast: Word('выковал', 1),
  femininePast: Word('выковала', 1),
  neuterPast: Word('выковало', 1),
  pluralPast: Word('выковали', 1),
  imperativeInformal: Word('выкуй', 1),
  imperativeFormal: Word('выкуйте', 1),
  imperfect: ['ковать'],
};

perfectVerbs.set(выковать.name.text, выковать);

export { выковать };