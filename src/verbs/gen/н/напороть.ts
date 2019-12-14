import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напороть: PerfectVerb = {
  name: Word('напороть', 5),
  singular1stPerson: Word('напорю', 5),
  singular2ndPerson: Word('напорешь', 3),
  singular3rdPerson: Word('напорет', 3),
  plural1stPerson: Word('напорем', 3),
  plural2ndPerson: Word('напорете', 3),
  plural3rdPerson: Word('напорют', 3),
  masculinePast: Word('напорол', 5),
  femininePast: Word('напорола', 5),
  neuterPast: Word('напороло', 5),
  pluralPast: Word('напороли', 5),
  imperativeInformal: Word('напори', 5),
  imperativeFormal: Word('напорите', 5),
  imperfect: [],
};

perfectVerbs.set(напороть.name.text, напороть);

export { напороть };