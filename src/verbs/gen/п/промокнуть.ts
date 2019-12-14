import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промокнуть: PerfectVerb = {
  name: Word('промокнуть', 4),
  singular1stPerson: Word('промокну', 4),
  singular2ndPerson: Word('промокнешь', 4),
  singular3rdPerson: Word('промокнет', 4),
  plural1stPerson: Word('промокнем', 4),
  plural2ndPerson: Word('промокнете', 4),
  plural3rdPerson: Word('промокнут', 4),
  masculinePast: Word('промок', 4),
  femininePast: Word('промокла', 4),
  neuterPast: Word('промокло', 4),
  pluralPast: Word('промокли', 4),
  imperativeInformal: Word('промокни', 4),
  imperativeFormal: Word('промокните', 4),
  imperfect: [],
};

perfectVerbs.set(промокнуть.name.text, промокнуть);

export { промокнуть };