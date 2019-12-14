import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набухнуть: PerfectVerb = {
  name: Word('набухнуть', 3),
  singular1stPerson: Word('набухну', 3),
  singular2ndPerson: Word('набухнешь', 3),
  singular3rdPerson: Word('набухнет', 3),
  plural1stPerson: Word('набухнем', 3),
  plural2ndPerson: Word('набухнете', 3),
  plural3rdPerson: Word('набухнут', 3),
  masculinePast: Word('набух', 3),
  femininePast: Word('набухла', 3),
  neuterPast: Word('набухло', 3),
  pluralPast: Word('набухли', 3),
  imperativeInformal: Word('набухни', 3),
  imperativeFormal: Word('набухните', 3),
  imperfect: [],
};

perfectVerbs.set(набухнуть.name.text, набухнуть);

export { набухнуть };