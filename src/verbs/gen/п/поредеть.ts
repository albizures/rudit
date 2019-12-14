import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поредеть: PerfectVerb = {
  name: Word('поредеть', 5),
  singular1stPerson: Word('поредею', 5),
  singular2ndPerson: Word('поредеешь', 5),
  singular3rdPerson: Word('поредеет', 5),
  plural1stPerson: Word('поредеем', 5),
  plural2ndPerson: Word('поредеете', 5),
  plural3rdPerson: Word('поредеют', 5),
  masculinePast: Word('поредел', 5),
  femininePast: Word('поредела', 5),
  neuterPast: Word('поредело', 5),
  pluralPast: Word('поредели', 5),
  imperativeInformal: Word('поредей', 5),
  imperativeFormal: Word('поредейте', 5),
  imperfect: [],
};

perfectVerbs.set(поредеть.name.text, поредеть);

export { поредеть };