import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закуривать: PerfectVerb = {
  name: Word('закуривать', 3),
  singular1stPerson: Word('закуриваю', 3),
  singular2ndPerson: Word('закуриваешь', 3),
  singular3rdPerson: Word('закуривает', 3),
  plural1stPerson: Word('закуриваем', 3),
  plural2ndPerson: Word('закуриваете', 3),
  plural3rdPerson: Word('закуривают', 3),
  masculinePast: Word('закуривал', 3),
  femininePast: Word('закуривала', 3),
  neuterPast: Word('закуривало', 3),
  pluralPast: Word('закуривали', 3),
  imperativeInformal: Word('закуривай', 3),
  imperativeFormal: Word('закуривайте', 3),
  imperfect: [],
};

perfectVerbs.set(закуривать.name.text, закуривать);

export { закуривать };