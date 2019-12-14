import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примёрзнуть: PerfectVerb = {
  name: Word('примёрзнуть', 2),
  singular1stPerson: Word('примёрзну', 2),
  singular2ndPerson: Word('примёрзнешь', 8),
  singular3rdPerson: Word('примёрзнет', 8),
  plural1stPerson: Word('примёрзнем', 8),
  plural2ndPerson: Word('примёрзнете', 8),
  plural3rdPerson: Word('примёрзнут', 2),
  masculinePast: Word('примёрз', 2),
  femininePast: Word('примёрзла', 8),
  neuterPast: Word('примёрзло', 2),
  pluralPast: Word('примёрзли', 2),
  imperativeInformal: Word('примёрзни', 2),
  imperativeFormal: Word('примёрзните', 10),
  imperfect: [],
};

perfectVerbs.set(примёрзнуть.name.text, примёрзнуть);

export { примёрзнуть };