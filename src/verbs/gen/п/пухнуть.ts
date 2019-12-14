import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пухнуть: PerfectVerb = {
  name: Word('пухнуть', 1),
  singular1stPerson: Word('пухну', 1),
  singular2ndPerson: Word('пухнешь', 1),
  singular3rdPerson: Word('пухнет', 1),
  plural1stPerson: Word('пухнем', 1),
  plural2ndPerson: Word('пухнете', 1),
  plural3rdPerson: Word('пухнут', 1),
  masculinePast: Word('пух,пу'хнул', 1),
  femininePast: Word('пухла,пу'хнула', 1),
  neuterPast: Word('пухло,пу'хнуло', 1),
  pluralPast: Word('пухли,пу'хнули', 1),
  imperativeInformal: Word('пухни', 1),
  imperativeFormal: Word('пухните', 1),
  imperfect: ['распухнуть','опухнуть','вспухнуть'],
};

perfectVerbs.set(пухнуть.name.text, пухнуть);

export { пухнуть };