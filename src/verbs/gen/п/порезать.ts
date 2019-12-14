import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порезать: PerfectVerb = {
  name: Word('порезать', 3),
  singular1stPerson: Word('порежу', 3),
  singular2ndPerson: Word('порежешь', 3),
  singular3rdPerson: Word('порежет', 3),
  plural1stPerson: Word('порежем', 3),
  plural2ndPerson: Word('порежете', 3),
  plural3rdPerson: Word('порежут', 3),
  masculinePast: Word('порезал', 3),
  femininePast: Word('порезала', 3),
  neuterPast: Word('порезало', 3),
  pluralPast: Word('порезали', 3),
  imperativeInformal: Word('порежь', 3),
  imperativeFormal: Word('порежьте', 3),
  imperfect: [],
};

perfectVerbs.set(порезать.name.text, порезать);

export { порезать };