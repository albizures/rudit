import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напылить: PerfectVerb = {
  name: Word('напылить', 5),
  singular1stPerson: Word('напылю', 5),
  singular2ndPerson: Word('напылишь', 5),
  singular3rdPerson: Word('напылит', 5),
  plural1stPerson: Word('напылим', 5),
  plural2ndPerson: Word('напылите', 5),
  plural3rdPerson: Word('напылят', 5),
  masculinePast: Word('напылил', 5),
  femininePast: Word('напылила', 5),
  neuterPast: Word('напылило', 5),
  pluralPast: Word('напылили', 5),
  imperativeInformal: Word('напыли', 5),
  imperativeFormal: Word('напылите', 5),
  imperfect: [],
};

perfectVerbs.set(напылить.name.text, напылить);

export { напылить };