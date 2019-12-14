import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спаривать: PerfectVerb = {
  name: Word('спаривать', 2),
  singular1stPerson: Word('спариваю', 2),
  singular2ndPerson: Word('спариваешь', 2),
  singular3rdPerson: Word('спаривает', 2),
  plural1stPerson: Word('спариваем', 2),
  plural2ndPerson: Word('спариваете', 2),
  plural3rdPerson: Word('спаривают', 2),
  masculinePast: Word('спаривал', 2),
  femininePast: Word('спаривала', 2),
  neuterPast: Word('спаривало', 2),
  pluralPast: Word('спаривали', 2),
  imperativeInformal: Word('спаривай', 2),
  imperativeFormal: Word('спаривайте', 2),
  imperfect: [],
};

perfectVerbs.set(спаривать.name.text, спаривать);

export { спаривать };