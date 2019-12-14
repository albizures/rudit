import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потухнуть: PerfectVerb = {
  name: Word('потухнуть', 3),
  singular1stPerson: Word('потухну', 3),
  singular2ndPerson: Word('потухнешь', 3),
  singular3rdPerson: Word('потухнет', 3),
  plural1stPerson: Word('потухнем', 3),
  plural2ndPerson: Word('потухнете', 3),
  plural3rdPerson: Word('потухнут', 3),
  masculinePast: Word('потух', 3),
  femininePast: Word('потухла', 3),
  neuterPast: Word('потухло', 3),
  pluralPast: Word('потухли', 3),
  imperativeInformal: Word('потухни', 3),
  imperativeFormal: Word('потухните', 3),
  imperfect: [],
};

perfectVerbs.set(потухнуть.name.text, потухнуть);

export { потухнуть };