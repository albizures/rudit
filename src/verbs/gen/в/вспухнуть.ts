import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспухнуть: PerfectVerb = {
  name: Word('вспухнуть', 3),
  singular1stPerson: Word('вспухну', 3),
  singular2ndPerson: Word('вспухнешь', 3),
  singular3rdPerson: Word('вспухнет', 3),
  plural1stPerson: Word('вспухнем', 3),
  plural2ndPerson: Word('вспухнете', 3),
  plural3rdPerson: Word('вспухнут', 3),
  masculinePast: Word('вспух', 3),
  femininePast: Word('вспухла', 3),
  neuterPast: Word('вспухло', 3),
  pluralPast: Word('вспухли', 3),
  imperativeInformal: Word('вспухни', 3),
  imperativeFormal: Word('вспухните', 3),
  imperfect: [],
};

perfectVerbs.set(вспухнуть.name.text, вспухнуть);

export { вспухнуть };