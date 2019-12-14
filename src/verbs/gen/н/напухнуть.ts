import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напухнуть: PerfectVerb = {
  name: Word('напухнуть', 3),
  singular1stPerson: Word('напухну', 3),
  singular2ndPerson: Word('напухнешь', 3),
  singular3rdPerson: Word('напухнет', 3),
  plural1stPerson: Word('напухнем', 3),
  plural2ndPerson: Word('напухнете', 3),
  plural3rdPerson: Word('напухнут', 3),
  masculinePast: Word('напух', 3),
  femininePast: Word('напухла', 3),
  neuterPast: Word('напухло', 3),
  pluralPast: Word('напухли', 3),
  imperativeInformal: Word('напухни', 3),
  imperativeFormal: Word('напухните', 3),
  imperfect: [],
};

perfectVerbs.set(напухнуть.name.text, напухнуть);

export { напухнуть };