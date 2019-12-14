import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напугать: PerfectVerb = {
  name: Word('напугать', 5),
  singular1stPerson: Word('напугаю', 5),
  singular2ndPerson: Word('напугаешь', 5),
  singular3rdPerson: Word('напугает', 5),
  plural1stPerson: Word('напугаем', 5),
  plural2ndPerson: Word('напугаете', 5),
  plural3rdPerson: Word('напугают', 5),
  masculinePast: Word('напугал', 5),
  femininePast: Word('напугала', 5),
  neuterPast: Word('напугало', 5),
  pluralPast: Word('напугали', 5),
  imperativeInformal: Word('напугай', 5),
  imperativeFormal: Word('напугайте', 5),
  imperfect: ['пугать'],
};

perfectVerbs.set(напугать.name.text, напугать);

export { напугать };