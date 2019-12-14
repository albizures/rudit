import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напакостить: PerfectVerb = {
  name: Word('напакостить', 3),
  singular1stPerson: Word('напакощу', 3),
  singular2ndPerson: Word('напакостишь', 3),
  singular3rdPerson: Word('напакостит', 3),
  plural1stPerson: Word('напакостим', 3),
  plural2ndPerson: Word('напакостите', 3),
  plural3rdPerson: Word('напакостят', 3),
  masculinePast: Word('напакостил', 3),
  femininePast: Word('напакостила', 3),
  neuterPast: Word('напакостило', 3),
  pluralPast: Word('напакостили', 3),
  imperativeInformal: Word('напакости', 3),
  imperativeFormal: Word('напакостите', 3),
  imperfect: [],
};

perfectVerbs.set(напакостить.name.text, напакостить);

export { напакостить };