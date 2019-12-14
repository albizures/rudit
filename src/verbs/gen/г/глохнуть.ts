import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глохнуть: PerfectVerb = {
  name: Word('глохнуть', 2),
  singular1stPerson: Word('глохну', 2),
  singular2ndPerson: Word('глохнешь', 2),
  singular3rdPerson: Word('глохнет', 2),
  plural1stPerson: Word('глохнем', 2),
  plural2ndPerson: Word('глохнете', 2),
  plural3rdPerson: Word('глохнут', 2),
  masculinePast: Word('глох,гло'хнул', 2),
  femininePast: Word('глохла,гло'хнула', 2),
  neuterPast: Word('глохло,гло'хнуло', 2),
  pluralPast: Word('глохли,гло'хнули', 2),
  imperativeInformal: Word('глохни', 2),
  imperativeFormal: Word('глохните', 2),
  imperfect: ['оглохнуть'],
};

perfectVerbs.set(глохнуть.name.text, глохнуть);

export { глохнуть };