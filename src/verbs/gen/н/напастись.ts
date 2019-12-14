import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напастись: PerfectVerb = {
  name: Word('напастись', 6),
  singular1stPerson: Word('напасусь', 5),
  singular2ndPerson: Word('напасёшься', 1),
  singular3rdPerson: Word('напасётся', 1),
  plural1stPerson: Word('напасёмся', 1),
  plural2ndPerson: Word('напасётесь', 1),
  plural3rdPerson: Word('напасутся', 5),
  masculinePast: Word('напасся', 3),
  femininePast: Word('напаслась', 6),
  neuterPast: Word('напаслось', 6),
  pluralPast: Word('напаслись', 6),
  imperativeInformal: Word('напасись', 5),
  imperativeFormal: Word('напаситесь', 5),
  imperfect: [],
};

perfectVerbs.set(напастись.name.text, напастись);

export { напастись };