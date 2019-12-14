import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тускнеть: PerfectVerb = {
  name: Word('тускнеть', 5),
  singular1stPerson: Word('тускнею', 5),
  singular2ndPerson: Word('тускнеешь', 5),
  singular3rdPerson: Word('тускнеет', 5),
  plural1stPerson: Word('тускнеем', 5),
  plural2ndPerson: Word('тускнеете', 5),
  plural3rdPerson: Word('тускнеют', 5),
  masculinePast: Word('тускнел', 5),
  femininePast: Word('тускнела', 5),
  neuterPast: Word('тускнело', 5),
  pluralPast: Word('тускнели', 5),
  imperativeInformal: Word('тускней', 5),
  imperativeFormal: Word('тускнейте', 5),
  imperfect: [],
};

perfectVerbs.set(тускнеть.name.text, тускнеть);

export { тускнеть };