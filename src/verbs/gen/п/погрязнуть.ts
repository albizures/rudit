import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрязнуть: PerfectVerb = {
  name: Word('погрязнуть', 4),
  singular1stPerson: Word('погрязну', 4),
  singular2ndPerson: Word('погрязнешь', 4),
  singular3rdPerson: Word('погрязнет', 4),
  plural1stPerson: Word('погрязнем', 4),
  plural2ndPerson: Word('погрязнете', 4),
  plural3rdPerson: Word('погрязнут', 4),
  masculinePast: Word('погряз', 4),
  femininePast: Word('погрязла', 4),
  neuterPast: Word('погрязло', 4),
  pluralPast: Word('погрязли', 4),
  imperativeInformal: Word('погрязни', 4),
  imperativeFormal: Word('погрязните', 4),
  imperfect: [],
};

perfectVerbs.set(погрязнуть.name.text, погрязнуть);

export { погрязнуть };