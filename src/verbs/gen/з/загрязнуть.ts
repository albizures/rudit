import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрязнуть: PerfectVerb = {
  name: Word('загрязнуть', 4),
  singular1stPerson: Word('загрязну', 4),
  singular2ndPerson: Word('загрязнешь', 4),
  singular3rdPerson: Word('загрязнет', 4),
  plural1stPerson: Word('загрязнем', 4),
  plural2ndPerson: Word('загрязнете', 4),
  plural3rdPerson: Word('загрязнут', 4),
  masculinePast: Word('загряз', 4),
  femininePast: Word('загрязла', 4),
  neuterPast: Word('загрязло', 4),
  pluralPast: Word('загрязли', 4),
  imperativeInformal: Word('загрязни', 4),
  imperativeFormal: Word('загрязните', 4),
  imperfect: [],
};

perfectVerbs.set(загрязнуть.name.text, загрязнуть);

export { загрязнуть };