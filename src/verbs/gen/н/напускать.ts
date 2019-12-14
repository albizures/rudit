import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напускать: PerfectVerb = {
  name: Word('напускать', 6),
  singular1stPerson: Word('напускаю', 6),
  singular2ndPerson: Word('напускаешь', 6),
  singular3rdPerson: Word('напускает', 6),
  plural1stPerson: Word('напускаем', 6),
  plural2ndPerson: Word('напускаете', 6),
  plural3rdPerson: Word('напускают', 6),
  masculinePast: Word('напускал', 6),
  femininePast: Word('напускала', 6),
  neuterPast: Word('напускало', 6),
  pluralPast: Word('напускали', 6),
  imperativeInformal: Word('напускай', 6),
  imperativeFormal: Word('напускайте', 6),
  imperfect: [],
};

perfectVerbs.set(напускать.name.text, напускать);

export { напускать };