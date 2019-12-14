import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напечатать: PerfectVerb = {
  name: Word('напечатать', 5),
  singular1stPerson: Word('напечатаю', 5),
  singular2ndPerson: Word('напечатаешь', 5),
  singular3rdPerson: Word('напечатает', 5),
  plural1stPerson: Word('напечатаем', 5),
  plural2ndPerson: Word('напечатаете', 5),
  plural3rdPerson: Word('напечатают', 5),
  masculinePast: Word('напечатал', 5),
  femininePast: Word('напечатала', 5),
  neuterPast: Word('напечатало', 5),
  pluralPast: Word('напечатали', 5),
  imperativeInformal: Word('напечатай', 5),
  imperativeFormal: Word('напечатайте', 5),
  imperfect: ['печатать'],
};

perfectVerbs.set(напечатать.name.text, напечатать);

export { напечатать };