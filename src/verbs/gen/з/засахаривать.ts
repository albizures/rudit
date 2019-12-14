import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засахаривать: PerfectVerb = {
  name: Word('засахаривать', 3),
  singular1stPerson: Word('засахариваю', 3),
  singular2ndPerson: Word('засахариваешь', 3),
  singular3rdPerson: Word('засахаривает', 3),
  plural1stPerson: Word('засахариваем', 3),
  plural2ndPerson: Word('засахариваете', 3),
  plural3rdPerson: Word('засахаривают', 3),
  masculinePast: Word('засахаривал', 3),
  femininePast: Word('засахаривала', 3),
  neuterPast: Word('засахаривало', 3),
  pluralPast: Word('засахаривали', 3),
  imperativeInformal: Word('засахаривай', 3),
  imperativeFormal: Word('засахаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(засахаривать.name.text, засахаривать);

export { засахаривать };