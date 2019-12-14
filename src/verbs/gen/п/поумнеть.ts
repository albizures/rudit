import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поумнеть: PerfectVerb = {
  name: Word('поумнеть', 5),
  singular1stPerson: Word('поумнею', 5),
  singular2ndPerson: Word('поумнеешь', 5),
  singular3rdPerson: Word('поумнеет', 5),
  plural1stPerson: Word('поумнеем', 5),
  plural2ndPerson: Word('поумнеете', 5),
  plural3rdPerson: Word('поумнеют', 5),
  masculinePast: Word('поумнел', 5),
  femininePast: Word('поумнела', 5),
  neuterPast: Word('поумнело', 5),
  pluralPast: Word('поумнели', 5),
  imperativeInformal: Word('поумней', 5),
  imperativeFormal: Word('поумнейте', 5),
  imperfect: [],
};

perfectVerbs.set(поумнеть.name.text, поумнеть);

export { поумнеть };