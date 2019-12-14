import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напрячься: PerfectVerb = {
  name: Word('напрячься', 4),
  singular1stPerson: Word('напрягусь', 6),
  singular2ndPerson: Word('напряжёшься', 1),
  singular3rdPerson: Word('напряжётся', 1),
  plural1stPerson: Word('напряжёмся', 1),
  plural2ndPerson: Word('напряжётесь', 1),
  plural3rdPerson: Word('напрягутся', 6),
  masculinePast: Word('напрягся', 4),
  femininePast: Word('напряглась', 7),
  neuterPast: Word('напряглось', 7),
  pluralPast: Word('напряглись', 7),
  imperativeInformal: Word('напрягись', 6),
  imperativeFormal: Word('напрягитесь', 6),
  imperfect: [],
};

perfectVerbs.set(напрячься.name.text, напрячься);

export { напрячься };