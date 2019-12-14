import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напевать: PerfectVerb = {
  name: Word('напевать', 5),
  singular1stPerson: Word('напеваю', 5),
  singular2ndPerson: Word('напеваешь', 5),
  singular3rdPerson: Word('напевает', 5),
  plural1stPerson: Word('напеваем', 5),
  plural2ndPerson: Word('напеваете', 5),
  plural3rdPerson: Word('напевают', 5),
  masculinePast: Word('напевал', 5),
  femininePast: Word('напевала', 5),
  neuterPast: Word('напевало', 5),
  pluralPast: Word('напевали', 5),
  imperativeInformal: Word('напевай', 5),
  imperativeFormal: Word('напевайте', 5),
  imperfect: [],
};

perfectVerbs.set(напевать.name.text, напевать);

export { напевать };