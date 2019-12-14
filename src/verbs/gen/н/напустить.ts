import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напустить: PerfectVerb = {
  name: Word('напустить', 6),
  singular1stPerson: Word('напущу', 5),
  singular2ndPerson: Word('напустишь', 3),
  singular3rdPerson: Word('напустит', 3),
  plural1stPerson: Word('напустим', 3),
  plural2ndPerson: Word('напустите', 3),
  plural3rdPerson: Word('напустят', 3),
  masculinePast: Word('напустил', 6),
  femininePast: Word('напустила', 6),
  neuterPast: Word('напустило', 6),
  pluralPast: Word('напустили', 6),
  imperativeInformal: Word('напусти', 6),
  imperativeFormal: Word('напустите', 6),
  imperfect: [],
};

perfectVerbs.set(напустить.name.text, напустить);

export { напустить };