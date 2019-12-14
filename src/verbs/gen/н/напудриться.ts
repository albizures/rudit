import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напудриться: PerfectVerb = {
  name: Word('напудриться', 3),
  singular1stPerson: Word('напудрюсь', 3),
  singular2ndPerson: Word('напудришься', 3),
  singular3rdPerson: Word('напудрится', 3),
  plural1stPerson: Word('напудримся', 3),
  plural2ndPerson: Word('напудритесь', 3),
  plural3rdPerson: Word('напудрятся', 3),
  masculinePast: Word('напудрился', 3),
  femininePast: Word('напудрилась', 3),
  neuterPast: Word('напудрилось', 3),
  pluralPast: Word('напудрились', 3),
  imperativeInformal: Word('напудрись', 3),
  imperativeFormal: Word('напудритесь', 3),
  imperfect: [],
};

perfectVerbs.set(напудриться.name.text, напудриться);

export { напудриться };