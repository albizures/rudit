import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посинеть: PerfectVerb = {
  name: Word('посинеть', 5),
  singular1stPerson: Word('посинею', 5),
  singular2ndPerson: Word('посинеешь', 5),
  singular3rdPerson: Word('посинеет', 5),
  plural1stPerson: Word('посинеем', 5),
  plural2ndPerson: Word('посинеете', 5),
  plural3rdPerson: Word('посинеют', 5),
  masculinePast: Word('посинел', 5),
  femininePast: Word('посинела', 5),
  neuterPast: Word('посинело', 5),
  pluralPast: Word('посинели', 5),
  imperativeInformal: Word('посиней', 5),
  imperativeFormal: Word('посинейте', 5),
  imperfect: [],
};

perfectVerbs.set(посинеть.name.text, посинеть);

export { посинеть };