import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промёрзнуть: PerfectVerb = {
  name: Word('промёрзнуть', 4),
  singular1stPerson: Word('промёрзну', 4),
  singular2ndPerson: Word('промёрзнешь', 4),
  singular3rdPerson: Word('промёрзнет', 4),
  plural1stPerson: Word('промёрзнем', 4),
  plural2ndPerson: Word('промёрзнете', 4),
  plural3rdPerson: Word('промёрзнут', 4),
  masculinePast: Word('промёрз', 4),
  femininePast: Word('промёрзла', 4),
  neuterPast: Word('промёрзло', 4),
  pluralPast: Word('промёрзли', 4),
  imperativeInformal: Word('промёрзни', 4),
  imperativeFormal: Word('промёрзните', 4),
  imperfect: [],
};

perfectVerbs.set(промёрзнуть.name.text, промёрзнуть);

export { промёрзнуть };