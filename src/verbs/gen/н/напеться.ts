import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напеться: PerfectVerb = {
  name: Word('напеться', 3),
  singular1stPerson: Word('напоюсь', 4),
  singular2ndPerson: Word('напоёшься', 4),
  singular3rdPerson: Word('напоётся', 4),
  plural1stPerson: Word('напоёмся', 4),
  plural2ndPerson: Word('напоётесь', 4),
  plural3rdPerson: Word('напоются', 4),
  masculinePast: Word('напелся', 3),
  femininePast: Word('напелась', 3),
  neuterPast: Word('напелось', 3),
  pluralPast: Word('напелись', 3),
  imperativeInformal: Word('напойся', 3),
  imperativeFormal: Word('напойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(напеться.name.text, напеться);

export { напеться };