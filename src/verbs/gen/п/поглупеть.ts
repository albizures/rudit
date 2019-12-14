import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглупеть: PerfectVerb = {
  name: Word('поглупеть', 6),
  singular1stPerson: Word('поглупею', 6),
  singular2ndPerson: Word('поглупеешь', 6),
  singular3rdPerson: Word('поглупеет', 6),
  plural1stPerson: Word('поглупеем', 6),
  plural2ndPerson: Word('поглупеете', 6),
  plural3rdPerson: Word('поглупеют', 6),
  masculinePast: Word('поглупел', 6),
  femininePast: Word('поглупела', 6),
  neuterPast: Word('поглупело', 6),
  pluralPast: Word('поглупели', 6),
  imperativeInformal: Word('поглупей', 6),
  imperativeFormal: Word('поглупейте', 6),
  imperfect: [],
};

perfectVerbs.set(поглупеть.name.text, поглупеть);

export { поглупеть };