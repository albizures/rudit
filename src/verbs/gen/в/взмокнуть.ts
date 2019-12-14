import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмокнуть: PerfectVerb = {
  name: Word('взмокнуть', 3),
  singular1stPerson: Word('взмокну', 3),
  singular2ndPerson: Word('взмокнешь', 3),
  singular3rdPerson: Word('взмокнет', 3),
  plural1stPerson: Word('взмокнем', 3),
  plural2ndPerson: Word('взмокнете', 3),
  plural3rdPerson: Word('взмокнут', 3),
  masculinePast: Word('взмок', 3),
  femininePast: Word('взмокла', 3),
  neuterPast: Word('взмокло', 3),
  pluralPast: Word('взмокли', 3),
  imperativeInformal: Word('взмокни', 3),
  imperativeFormal: Word('взмокните', 3),
  imperfect: [],
};

perfectVerbs.set(взмокнуть.name.text, взмокнуть);

export { взмокнуть };