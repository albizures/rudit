import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посоловеть: PerfectVerb = {
  name: Word('посоловеть', 7),
  singular1stPerson: Word('посоловею', 7),
  singular2ndPerson: Word('посоловеешь', 7),
  singular3rdPerson: Word('посоловеет', 7),
  plural1stPerson: Word('посоловеем', 7),
  plural2ndPerson: Word('посоловеете', 7),
  plural3rdPerson: Word('посоловеют', 7),
  masculinePast: Word('посоловел', 7),
  femininePast: Word('посоловела', 7),
  neuterPast: Word('посоловело', 7),
  pluralPast: Word('посоловели', 7),
  imperativeInformal: Word('посоловей', 7),
  imperativeFormal: Word('посоловейте', 7),
  imperfect: [],
};

perfectVerbs.set(посоловеть.name.text, посоловеть);

export { посоловеть };