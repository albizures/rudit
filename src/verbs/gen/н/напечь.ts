import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напечь: PerfectVerb = {
  name: Word('напечь', 3),
  singular1stPerson: Word('напеку', 5),
  singular2ndPerson: Word('напечёшь', 5),
  singular3rdPerson: Word('напечёт', 5),
  plural1stPerson: Word('напечём', 5),
  plural2ndPerson: Word('напечёте', 5),
  plural3rdPerson: Word('напекут', 5),
  masculinePast: Word('напёк', 3),
  femininePast: Word('напекла', 6),
  neuterPast: Word('напекло', 6),
  pluralPast: Word('напекли', 6),
  imperativeInformal: Word('напеки', 5),
  imperativeFormal: Word('напеките', 5),
  imperfect: [],
};

perfectVerbs.set(напечь.name.text, напечь);

export { напечь };