import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насахаривать: PerfectVerb = {
  name: Word('насахаривать', 3),
  singular1stPerson: Word('насахариваю', 3),
  singular2ndPerson: Word('насахариваешь', 3),
  singular3rdPerson: Word('насахаривает', 3),
  plural1stPerson: Word('насахариваем', 3),
  plural2ndPerson: Word('насахариваете', 3),
  plural3rdPerson: Word('насахаривают', 3),
  masculinePast: Word('насахаривал', 3),
  femininePast: Word('насахаривала', 3),
  neuterPast: Word('насахаривало', 3),
  pluralPast: Word('насахаривали', 3),
  imperativeInformal: Word('насахаривай', 3),
  imperativeFormal: Word('насахаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(насахаривать.name.text, насахаривать);

export { насахаривать };