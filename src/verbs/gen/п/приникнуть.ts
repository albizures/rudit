import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приникнуть: PerfectVerb = {
  name: Word('приникнуть', 4),
  singular1stPerson: Word('приникну', 4),
  singular2ndPerson: Word('приникнешь', 4),
  singular3rdPerson: Word('приникнет', 4),
  plural1stPerson: Word('приникнем', 4),
  plural2ndPerson: Word('приникнете', 4),
  plural3rdPerson: Word('приникнут', 4),
  masculinePast: Word('приник', 4),
  femininePast: Word('приникла', 4),
  neuterPast: Word('приникло', 4),
  pluralPast: Word('приникли', 4),
  imperativeInformal: Word('приникни', 4),
  imperativeFormal: Word('приникните', 4),
  imperfect: [],
};

perfectVerbs.set(приникнуть.name.text, приникнуть);

export { приникнуть };