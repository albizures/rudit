import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напичкать: PerfectVerb = {
  name: Word('напичкать', 3),
  singular1stPerson: Word('напичкаю', 3),
  singular2ndPerson: Word('напичкаешь', 3),
  singular3rdPerson: Word('напичкает', 3),
  plural1stPerson: Word('напичкаем', 3),
  plural2ndPerson: Word('напичкаете', 3),
  plural3rdPerson: Word('напичкают', 3),
  masculinePast: Word('напичкал', 3),
  femininePast: Word('напичкала', 3),
  neuterPast: Word('напичкало', 3),
  pluralPast: Word('напичкали', 3),
  imperativeInformal: Word('напичкай', 3),
  imperativeFormal: Word('напичкайте', 3),
  imperfect: [],
};

perfectVerbs.set(напичкать.name.text, напичкать);

export { напичкать };