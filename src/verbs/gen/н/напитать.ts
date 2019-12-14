import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напитать: PerfectVerb = {
  name: Word('напитать', 5),
  singular1stPerson: Word('напитаю', 5),
  singular2ndPerson: Word('напитаешь', 5),
  singular3rdPerson: Word('напитает', 5),
  plural1stPerson: Word('напитаем', 5),
  plural2ndPerson: Word('напитаете', 5),
  plural3rdPerson: Word('напитают', 5),
  masculinePast: Word('напитал', 5),
  femininePast: Word('напитала', 5),
  neuterPast: Word('напитало', 5),
  pluralPast: Word('напитали', 5),
  imperativeInformal: Word('напитай', 5),
  imperativeFormal: Word('напитайте', 5),
  imperfect: [],
};

perfectVerbs.set(напитать.name.text, напитать);

export { напитать };