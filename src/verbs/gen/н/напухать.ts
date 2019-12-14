import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напухать: PerfectVerb = {
  name: Word('напухать', 5),
  singular1stPerson: Word('напухаю', 5),
  singular2ndPerson: Word('напухаешь', 5),
  singular3rdPerson: Word('напухает', 5),
  plural1stPerson: Word('напухаем', 5),
  plural2ndPerson: Word('напухаете', 5),
  plural3rdPerson: Word('напухают', 5),
  masculinePast: Word('напухал', 5),
  femininePast: Word('напухала', 5),
  neuterPast: Word('напухало', 5),
  pluralPast: Word('напухали', 5),
  imperativeInformal: Word('напухай', 5),
  imperativeFormal: Word('напухайте', 5),
  imperfect: [],
};

perfectVerbs.set(напухать.name.text, напухать);

export { напухать };