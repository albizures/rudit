import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примёрзнуть: PerfectVerb = {
  name: Word('примёрзнуть', 4),
  singular1stPerson: Word('примёрзну', 4),
  singular2ndPerson: Word('примёрзнешь', 4),
  singular3rdPerson: Word('примёрзнет', 4),
  plural1stPerson: Word('примёрзнем', 4),
  plural2ndPerson: Word('примёрзнете', 4),
  plural3rdPerson: Word('примёрзнут', 4),
  masculinePast: Word('примёрз', 4),
  femininePast: Word('примёрзла', 4),
  neuterPast: Word('примёрзло', 4),
  pluralPast: Word('примёрзли', 4),
  imperativeInformal: Word('примёрзни', 4),
  imperativeFormal: Word('примёрзните', 4),
  imperfect: [],
};

perfectVerbs.set(примёрзнуть.name.text, примёрзнуть);

export { примёрзнуть };