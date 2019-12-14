import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напаривать: PerfectVerb = {
  name: Word('напаривать', 3),
  singular1stPerson: Word('напариваю', 3),
  singular2ndPerson: Word('напариваешь', 3),
  singular3rdPerson: Word('напаривает', 3),
  plural1stPerson: Word('напариваем', 3),
  plural2ndPerson: Word('напариваете', 3),
  plural3rdPerson: Word('напаривают', 3),
  masculinePast: Word('напаривал', 3),
  femininePast: Word('напаривала', 3),
  neuterPast: Word('напаривало', 3),
  pluralPast: Word('напаривали', 3),
  imperativeInformal: Word('напаривай', 3),
  imperativeFormal: Word('напаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(напаривать.name.text, напаривать);

export { напаривать };