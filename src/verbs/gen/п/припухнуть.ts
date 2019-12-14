import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припухнуть: PerfectVerb = {
  name: Word('припухнуть', 4),
  singular1stPerson: Word('припухну', 4),
  singular2ndPerson: Word('припухнешь', 4),
  singular3rdPerson: Word('припухнет', 4),
  plural1stPerson: Word('припухнем', 4),
  plural2ndPerson: Word('припухнете', 4),
  plural3rdPerson: Word('припухнут', 4),
  masculinePast: Word('припух', 4),
  femininePast: Word('припухла', 4),
  neuterPast: Word('припухло', 4),
  pluralPast: Word('припухли', 4),
  imperativeInformal: Word('припухни', 4),
  imperativeFormal: Word('припухните', 4),
  imperfect: [],
};

perfectVerbs.set(припухнуть.name.text, припухнуть);

export { припухнуть };