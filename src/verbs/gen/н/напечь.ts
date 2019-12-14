import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напечь: PerfectVerb = {
  name: Word('напечь', 3),
  singular1stPerson: Word('напеку', 5),
  singular2ndPerson: Word('напечёшь', 1),
  singular3rdPerson: Word('напечёт', 1),
  plural1stPerson: Word('напечём', 1),
  plural2ndPerson: Word('напечёте', 1),
  plural3rdPerson: Word('напекут', 5),
  masculinePast: Word('напёк', 1),
  femininePast: Word('напекла', 6),
  neuterPast: Word('напекло', 6),
  pluralPast: Word('напекли', 6),
  imperativeInformal: Word('напеки', 5),
  imperativeFormal: Word('напеките', 5),
  imperfect: [],
};

perfectVerbs.set(напечь.name.text, напечь);

export { напечь };