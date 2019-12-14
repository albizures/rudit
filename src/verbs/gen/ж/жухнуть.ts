import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жухнуть: PerfectVerb = {
  name: Word('жухнуть', 1),
  singular1stPerson: Word('жухну', 1),
  singular2ndPerson: Word('жухнешь', 1),
  singular3rdPerson: Word('жухнет', 1),
  plural1stPerson: Word('жухнем', 1),
  plural2ndPerson: Word('жухнете', 1),
  plural3rdPerson: Word('жухнут', 1),
  masculinePast: Word('жух//жу'хнул', 1),
  femininePast: Word('жухла', 1),
  neuterPast: Word('жухло', 1),
  pluralPast: Word('жухли', 1),
  imperativeInformal: Word('жухни', 1),
  imperativeFormal: Word('жухните', 1),
  imperfect: [],
};

perfectVerbs.set(жухнуть.name.text, жухнуть);

export { жухнуть };