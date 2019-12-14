import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напрягать: PerfectVerb = {
  name: Word('напрягать', 6),
  singular1stPerson: Word('напрягаю', 6),
  singular2ndPerson: Word('напрягаешь', 6),
  singular3rdPerson: Word('напрягает', 6),
  plural1stPerson: Word('напрягаем', 6),
  plural2ndPerson: Word('напрягаете', 6),
  plural3rdPerson: Word('напрягают', 6),
  masculinePast: Word('напрягал', 6),
  femininePast: Word('напрягала', 6),
  neuterPast: Word('напрягало', 6),
  pluralPast: Word('напрягали', 6),
  imperativeInformal: Word('напрягай', 6),
  imperativeFormal: Word('напрягайте', 6),
  imperfect: [],
};

perfectVerbs.set(напрягать.name.text, напрягать);

export { напрягать };