import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вникнуть: PerfectVerb = {
  name: Word('вникнуть', 2),
  singular1stPerson: Word('вникну', 2),
  singular2ndPerson: Word('вникнешь', 2),
  singular3rdPerson: Word('вникнет', 2),
  plural1stPerson: Word('вникнем', 2),
  plural2ndPerson: Word('вникнете', 2),
  plural3rdPerson: Word('вникнут', 2),
  masculinePast: Word('вник', 2),
  femininePast: Word('вникла', 2),
  neuterPast: Word('вникло', 2),
  pluralPast: Word('вникли', 2),
  imperativeInformal: Word('вникни', 2),
  imperativeFormal: Word('вникните', 2),
  imperfect: [],
};

perfectVerbs.set(вникнуть.name.text, вникнуть);

export { вникнуть };