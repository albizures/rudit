import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бухнуть: PerfectVerb = {
  name: Word('бухнуть', 1),
  singular1stPerson: Word('бухну', 1),
  singular2ndPerson: Word('бухнешь', 1),
  singular3rdPerson: Word('бухнет', 1),
  plural1stPerson: Word('бухнем', 1),
  plural2ndPerson: Word('бухнете', 1),
  plural3rdPerson: Word('бухнут', 1),
  masculinePast: Word('бухнул', 1),
  femininePast: Word('бухнула', 1),
  neuterPast: Word('бухнуло', 1),
  pluralPast: Word('бухнули', 1),
  imperativeInformal: Word('бухни', 1),
  imperativeFormal: Word('бухните', 1),
  imperfect: [],
};

perfectVerbs.set(бухнуть.name.text, бухнуть);

export { бухнуть };