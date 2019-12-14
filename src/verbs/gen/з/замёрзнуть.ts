import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замёрзнуть: PerfectVerb = {
  name: Word('замёрзнуть', 3),
  singular1stPerson: Word('замёрзну', 3),
  singular2ndPerson: Word('замёрзнешь', 3),
  singular3rdPerson: Word('замёрзнет', 3),
  plural1stPerson: Word('замёрзнем', 3),
  plural2ndPerson: Word('замёрзнете', 3),
  plural3rdPerson: Word('замёрзнут', 3),
  masculinePast: Word('замёрз', 3),
  femininePast: Word('замёрзла', 3),
  neuterPast: Word('замёрзло', 3),
  pluralPast: Word('замёрзли', 3),
  imperativeInformal: Word('замёрзни', 3),
  imperativeFormal: Word('замёрзните', 3),
  imperfect: [],
};

perfectVerbs.set(замёрзнуть.name.text, замёрзнуть);

export { замёрзнуть };