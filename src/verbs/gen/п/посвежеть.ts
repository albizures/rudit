import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвежеть: PerfectVerb = {
  name: Word('посвежеть', 6),
  singular1stPerson: Word('посвежею', 6),
  singular2ndPerson: Word('посвежеешь', 6),
  singular3rdPerson: Word('посвежеет', 6),
  plural1stPerson: Word('посвежеем', 6),
  plural2ndPerson: Word('посвежеете', 6),
  plural3rdPerson: Word('посвежеют', 6),
  masculinePast: Word('посвежел', 6),
  femininePast: Word('посвежела', 6),
  neuterPast: Word('посвежело', 6),
  pluralPast: Word('посвежели', 6),
  imperativeInformal: Word('посвежей', 6),
  imperativeFormal: Word('посвежейте', 6),
  imperfect: [],
};

perfectVerbs.set(посвежеть.name.text, посвежеть);

export { посвежеть };