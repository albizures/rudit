import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рухнуть: PerfectVerb = {
  name: Word('рухнуть', 1),
  singular1stPerson: Word('рухну', 1),
  singular2ndPerson: Word('рухнешь', 1),
  singular3rdPerson: Word('рухнет', 1),
  plural1stPerson: Word('рухнем', 1),
  plural2ndPerson: Word('рухнете', 1),
  plural3rdPerson: Word('рухнут', 1),
  masculinePast: Word('рухнул', 1),
  femininePast: Word('рухнула', 1),
  neuterPast: Word('рухнуло', 1),
  pluralPast: Word('рухнули', 1),
  imperativeInformal: Word('рухни', 1),
  imperativeFormal: Word('рухните', 1),
  imperfect: [],
};

perfectVerbs.set(рухнуть.name.text, рухнуть);

export { рухнуть };