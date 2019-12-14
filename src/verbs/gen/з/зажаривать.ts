import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажаривать: PerfectVerb = {
  name: Word('зажаривать', 3),
  singular1stPerson: Word('зажариваю', 3),
  singular2ndPerson: Word('зажариваешь', 3),
  singular3rdPerson: Word('зажаривает', 3),
  plural1stPerson: Word('зажариваем', 3),
  plural2ndPerson: Word('зажариваете', 3),
  plural3rdPerson: Word('зажаривают', 3),
  masculinePast: Word('зажаривал', 3),
  femininePast: Word('зажаривала', 3),
  neuterPast: Word('зажаривало', 3),
  pluralPast: Word('зажаривали', 3),
  imperativeInformal: Word('зажаривай', 3),
  imperativeFormal: Word('зажаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(зажаривать.name.text, зажаривать);

export { зажаривать };