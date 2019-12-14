import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поникнуть: PerfectVerb = {
  name: Word('поникнуть', 3),
  singular1stPerson: Word('поникну', 3),
  singular2ndPerson: Word('поникнешь', 3),
  singular3rdPerson: Word('поникнет', 3),
  plural1stPerson: Word('поникнем', 3),
  plural2ndPerson: Word('поникнете', 3),
  plural3rdPerson: Word('поникнут', 3),
  masculinePast: Word('поник', 3),
  femininePast: Word('поникла', 3),
  neuterPast: Word('поникло', 3),
  pluralPast: Word('поникли', 3),
  imperativeInformal: Word('поникни', 3),
  imperativeFormal: Word('поникните', 3),
  imperfect: [],
};

perfectVerbs.set(поникнуть.name.text, поникнуть);

export { поникнуть };