import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напоить: PerfectVerb = {
  name: Word('напоить', 4),
  singular1stPerson: Word('напою', 4),
  singular2ndPerson: Word('напоишь', 3),
  singular3rdPerson: Word('напоит', 3),
  plural1stPerson: Word('напоим', 3),
  plural2ndPerson: Word('напоите', 3),
  plural3rdPerson: Word('напоят', 3),
  masculinePast: Word('напоил', 4),
  femininePast: Word('напоила', 4),
  neuterPast: Word('напоило', 4),
  pluralPast: Word('напоили', 4),
  imperativeInformal: Word('напои', 4),
  imperativeFormal: Word('напоите', 4),
  imperfect: [],
};

perfectVerbs.set(напоить.name.text, напоить);

export { напоить };