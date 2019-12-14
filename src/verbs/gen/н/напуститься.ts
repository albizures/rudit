import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напуститься: PerfectVerb = {
  name: Word('напуститься', 6),
  singular1stPerson: Word('напущусь', 5),
  singular2ndPerson: Word('напустишься', 3),
  singular3rdPerson: Word('напустится', 3),
  plural1stPerson: Word('напустимся', 3),
  plural2ndPerson: Word('напуститесь', 3),
  plural3rdPerson: Word('напустятся', 3),
  masculinePast: Word('напустился', 6),
  femininePast: Word('напустилась', 6),
  neuterPast: Word('напустилось', 6),
  pluralPast: Word('напустились', 6),
  imperativeInformal: Word('напустись', 6),
  imperativeFormal: Word('напуститесь', 6),
  imperfect: [],
};

perfectVerbs.set(напуститься.name.text, напуститься);

export { напуститься };