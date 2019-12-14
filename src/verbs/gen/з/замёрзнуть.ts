import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замёрзнуть: PerfectVerb = {
  name: Word('замёрзнуть', 1),
  singular1stPerson: Word('замёрзну', 1),
  singular2ndPerson: Word('замёрзнешь', 1),
  singular3rdPerson: Word('замёрзнет', 1),
  plural1stPerson: Word('замёрзнем', 1),
  plural2ndPerson: Word('замёрзнете', 1),
  plural3rdPerson: Word('замёрзнут', 1),
  masculinePast: Word('замёрз', 1),
  femininePast: Word('замёрзла', 1),
  neuterPast: Word('замёрзло', 1),
  pluralPast: Word('замёрзли', 1),
  imperativeInformal: Word('замёрзни', 1),
  imperativeFormal: Word('замёрзните', 1),
  imperfect: [],
};

perfectVerbs.set(замёрзнуть.name.text, замёрзнуть);

export { замёрзнуть };