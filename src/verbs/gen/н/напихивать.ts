import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напихивать: PerfectVerb = {
  name: Word('напихивать', 3),
  singular1stPerson: Word('напихиваю', 3),
  singular2ndPerson: Word('напихиваешь', 3),
  singular3rdPerson: Word('напихивает', 3),
  plural1stPerson: Word('напихиваем', 3),
  plural2ndPerson: Word('напихиваете', 3),
  plural3rdPerson: Word('напихивают', 3),
  masculinePast: Word('напихивал', 3),
  femininePast: Word('напихивала', 3),
  neuterPast: Word('напихивало', 3),
  pluralPast: Word('напихивали', 3),
  imperativeInformal: Word('напихивай', 3),
  imperativeFormal: Word('напихивайте', 3),
  imperfect: [],
};

perfectVerbs.set(напихивать.name.text, напихивать);

export { напихивать };