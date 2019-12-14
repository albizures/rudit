import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напроситься: PerfectVerb = {
  name: Word('напроситься', 6),
  singular1stPerson: Word('напрошусь', 6),
  singular2ndPerson: Word('напросишься', 4),
  singular3rdPerson: Word('напросится', 4),
  plural1stPerson: Word('напросимся', 4),
  plural2ndPerson: Word('напроситесь', 4),
  plural3rdPerson: Word('напросятся', 4),
  masculinePast: Word('напросился', 6),
  femininePast: Word('напросилась', 6),
  neuterPast: Word('напросилось', 6),
  pluralPast: Word('напросились', 6),
  imperativeInformal: Word('напросись', 6),
  imperativeFormal: Word('напроситесь', 6),
  imperfect: ['напрашиваться'],
};

perfectVerbs.set(напроситься.name.text, напроситься);

export { напроситься };