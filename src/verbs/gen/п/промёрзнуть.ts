import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промёрзнуть: PerfectVerb = {
  name: Word('промёрзнуть', 2),
  singular1stPerson: Word('промёрзну', 2),
  singular2ndPerson: Word('промёрзнешь', 8),
  singular3rdPerson: Word('промёрзнет', 8),
  plural1stPerson: Word('промёрзнем', 8),
  plural2ndPerson: Word('промёрзнете', 8),
  plural3rdPerson: Word('промёрзнут', 2),
  masculinePast: Word('промёрз', 2),
  femininePast: Word('промёрзла', 8),
  neuterPast: Word('промёрзло', 2),
  pluralPast: Word('промёрзли', 8),
  imperativeInformal: Word('промёрзни', 8),
  imperativeFormal: Word('промёрзните', 10),
  imperfect: [],
};

perfectVerbs.set(промёрзнуть.name.text, промёрзнуть);

export { промёрзнуть };