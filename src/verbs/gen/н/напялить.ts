import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напялить: PerfectVerb = {
  name: Word('напялить', 3),
  singular1stPerson: Word('напялю', 3),
  singular2ndPerson: Word('напялишь', 3),
  singular3rdPerson: Word('напялит', 3),
  plural1stPerson: Word('напялим', 3),
  plural2ndPerson: Word('напялите', 3),
  plural3rdPerson: Word('напялят', 3),
  masculinePast: Word('напялил', 3),
  femininePast: Word('напялила', 3),
  neuterPast: Word('напялило', 3),
  pluralPast: Word('напялили', 3),
  imperativeInformal: Word('напяль', 3),
  imperativeFormal: Word('напяльте', 3),
  imperfect: [],
};

perfectVerbs.set(напялить.name.text, напялить);

export { напялить };