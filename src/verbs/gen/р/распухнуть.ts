import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распухнуть: PerfectVerb = {
  name: Word('распухнуть', 4),
  singular1stPerson: Word('распухну', 4),
  singular2ndPerson: Word('распухнешь', 4),
  singular3rdPerson: Word('распухнет', 4),
  plural1stPerson: Word('распухнем', 4),
  plural2ndPerson: Word('распухнете', 4),
  plural3rdPerson: Word('распухнут', 4),
  masculinePast: Word('распух,распу'хнул', 4),
  femininePast: Word('распухла,распу'хнула', 4),
  neuterPast: Word('распухло,распу'хнуло', 4),
  pluralPast: Word('распухли,распу'хнули', 4),
  imperativeInformal: Word('распухни', 4),
  imperativeFormal: Word('распухните', 4),
  imperfect: ['пухнуть','распухать'],
};

perfectVerbs.set(распухнуть.name.text, распухнуть);

export { распухнуть };