import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напиться: PerfectVerb = {
  name: Word('напиться', 3),
  singular1stPerson: Word('напьюсь', 4),
  singular2ndPerson: Word('напьёшься', 1),
  singular3rdPerson: Word('напьётся', 1),
  plural1stPerson: Word('напьёмся', 1),
  plural2ndPerson: Word('напьётесь', 1),
  plural3rdPerson: Word('напьются', 4),
  masculinePast: Word('напился', 3),
  femininePast: Word('напилась', 5),
  neuterPast: Word('напилось', 3),
  pluralPast: Word('напились', 3),
  imperativeInformal: Word('напейся', 3),
  imperativeFormal: Word('напейтесь', 3),
  imperfect: ['напиваться'],
};

perfectVerbs.set(напиться.name.text, напиться);

export { напиться };