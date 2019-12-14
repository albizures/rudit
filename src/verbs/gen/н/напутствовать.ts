import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напутствовать: PerfectVerb = {
  name: Word('напутствовать', 3),
  singular1stPerson: Word('напутствую', 3),
  singular2ndPerson: Word('напутствуешь', 3),
  singular3rdPerson: Word('напутствует', 3),
  plural1stPerson: Word('напутствуем', 3),
  plural2ndPerson: Word('напутствуете', 3),
  plural3rdPerson: Word('напутствуют', 3),
  masculinePast: Word('напутствовал', 3),
  femininePast: Word('напутствовала', 3),
  neuterPast: Word('напутствовало', 3),
  pluralPast: Word('напутствовали', 3),
  imperativeInformal: Word('напутствуй', 3),
  imperativeFormal: Word('напутствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(напутствовать.name.text, напутствовать);

export { напутствовать };