import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напороться: PerfectVerb = {
  name: Word('напороться', 5),
  singular1stPerson: Word('напорюсь', 5),
  singular2ndPerson: Word('напорешься', 3),
  singular3rdPerson: Word('напорется', 3),
  plural1stPerson: Word('напоремся', 3),
  plural2ndPerson: Word('напоретесь', 3),
  plural3rdPerson: Word('напорются', 3),
  masculinePast: Word('напоролся', 5),
  femininePast: Word('напоролась', 5),
  neuterPast: Word('напоролось', 5),
  pluralPast: Word('напоролись', 5),
  imperativeInformal: Word('напорись', 5),
  imperativeFormal: Word('напоритесь', 5),
  imperfect: [],
};

perfectVerbs.set(напороться.name.text, напороться);

export { напороться };