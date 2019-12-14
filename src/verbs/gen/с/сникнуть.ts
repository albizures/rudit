import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сникнуть: PerfectVerb = {
  name: Word('сникнуть', 2),
  singular1stPerson: Word('сникну', 2),
  singular2ndPerson: Word('сникнешь', 2),
  singular3rdPerson: Word('сникнет', 2),
  plural1stPerson: Word('сникнем', 2),
  plural2ndPerson: Word('сникнете', 2),
  plural3rdPerson: Word('сникнут', 2),
  masculinePast: Word('сник', 2),
  femininePast: Word('сникла', 2),
  neuterPast: Word('сникло', 2),
  pluralPast: Word('сникли', 2),
  imperativeInformal: Word('сникни', 2),
  imperativeFormal: Word('сникните', 2),
  imperfect: [],
};

perfectVerbs.set(сникнуть.name.text, сникнуть);

export { сникнуть };