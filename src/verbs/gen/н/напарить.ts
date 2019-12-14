import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напарить: PerfectVerb = {
  name: Word('напарить', 3),
  singular1stPerson: Word('напарю', 3),
  singular2ndPerson: Word('напаришь', 3),
  singular3rdPerson: Word('напарит', 3),
  plural1stPerson: Word('напарим', 3),
  plural2ndPerson: Word('напарите', 3),
  plural3rdPerson: Word('напарят', 3),
  masculinePast: Word('напарил', 3),
  femininePast: Word('напарила', 3),
  neuterPast: Word('напарило', 3),
  pluralPast: Word('напарили', 3),
  imperativeInformal: Word('напарь', 3),
  imperativeFormal: Word('напарьте', 3),
  imperfect: [],
};

perfectVerbs.set(напарить.name.text, напарить);

export { напарить };