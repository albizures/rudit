import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напачкать: PerfectVerb = {
  name: Word('напачкать', 3),
  singular1stPerson: Word('напачкаю', 3),
  singular2ndPerson: Word('напачкаешь', 3),
  singular3rdPerson: Word('напачкает', 3),
  plural1stPerson: Word('напачкаем', 3),
  plural2ndPerson: Word('напачкаете', 3),
  plural3rdPerson: Word('напачкают', 3),
  masculinePast: Word('напачкал', 3),
  femininePast: Word('напачкала', 3),
  neuterPast: Word('напачкало', 3),
  pluralPast: Word('напачкали', 3),
  imperativeInformal: Word('напачкай', 3),
  imperativeFormal: Word('напачкайте', 3),
  imperfect: [],
};

perfectVerbs.set(напачкать.name.text, напачкать);

export { напачкать };