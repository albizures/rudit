import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напяливать: PerfectVerb = {
  name: Word('напяливать', 3),
  singular1stPerson: Word('напяливаю', 3),
  singular2ndPerson: Word('напяливаешь', 3),
  singular3rdPerson: Word('напяливает', 3),
  plural1stPerson: Word('напяливаем', 3),
  plural2ndPerson: Word('напяливаете', 3),
  plural3rdPerson: Word('напяливают', 3),
  masculinePast: Word('напяливал', 3),
  femininePast: Word('напяливала', 3),
  neuterPast: Word('напяливало', 3),
  pluralPast: Word('напяливали', 3),
  imperativeInformal: Word('напяливай', 3),
  imperativeFormal: Word('напяливайте', 3),
  imperfect: [],
};

perfectVerbs.set(напяливать.name.text, напяливать);

export { напяливать };