import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напекать: PerfectVerb = {
  name: Word('напекать', 5),
  singular1stPerson: Word('напекаю', 5),
  singular2ndPerson: Word('напекаешь', 5),
  singular3rdPerson: Word('напекает', 5),
  plural1stPerson: Word('напекаем', 5),
  plural2ndPerson: Word('напекаете', 5),
  plural3rdPerson: Word('напекают', 5),
  masculinePast: Word('напекал', 5),
  femininePast: Word('напекала', 5),
  neuterPast: Word('напекало', 5),
  pluralPast: Word('напекали', 5),
  imperativeInformal: Word('напекай', 5),
  imperativeFormal: Word('напекайте', 5),
  imperfect: [],
};

perfectVerbs.set(напекать.name.text, напекать);

export { напекать };