import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const говаривать: PerfectVerb = {
  name: Word('говаривать', 3),
  singular1stPerson: Word('говариваю', 3),
  singular2ndPerson: Word('говариваешь', 3),
  singular3rdPerson: Word('говаривает', 3),
  plural1stPerson: Word('говариваем', 3),
  plural2ndPerson: Word('говариваете', 3),
  plural3rdPerson: Word('говаривают', 3),
  masculinePast: Word('говаривал', 3),
  femininePast: Word('говаривала', 3),
  neuterPast: Word('говаривало', 3),
  pluralPast: Word('говаривали', 3),
  imperativeInformal: Word('говаривай', 3),
  imperativeFormal: Word('говаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(говаривать.name.text, говаривать);

export { говаривать };