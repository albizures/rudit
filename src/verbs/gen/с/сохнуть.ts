import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сохнуть: PerfectVerb = {
  name: Word('сохнуть', 1),
  singular1stPerson: Word('сохну', 1),
  singular2ndPerson: Word('сохнешь', 1),
  singular3rdPerson: Word('сохнет', 1),
  plural1stPerson: Word('сохнем', 1),
  plural2ndPerson: Word('сохнете', 1),
  plural3rdPerson: Word('сохнут', 1),
  masculinePast: Word('сох,со'хнул', 1),
  femininePast: Word('сохла,со'хнула', 1),
  neuterPast: Word('сохло,со'хнуло', 1),
  pluralPast: Word('сохли,со'хнули', 1),
  imperativeInformal: Word('сохни', 1),
  imperativeFormal: Word('сохните', 1),
  imperfect: ['высохнуть','засохнуть'],
};

perfectVerbs.set(сохнуть.name.text, сохнуть);

export { сохнуть };