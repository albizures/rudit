import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соловеть: PerfectVerb = {
  name: Word('соловеть', 5),
  singular1stPerson: Word('соловею', 5),
  singular2ndPerson: Word('соловеешь', 5),
  singular3rdPerson: Word('соловеет', 5),
  plural1stPerson: Word('соловеем', 5),
  plural2ndPerson: Word('соловеете', 5),
  plural3rdPerson: Word('соловеют', 5),
  masculinePast: Word('соловел', 5),
  femininePast: Word('соловела', 5),
  neuterPast: Word('соловело', 5),
  pluralPast: Word('соловели', 5),
  imperativeInformal: Word('соловей', 5),
  imperativeFormal: Word('соловейте', 5),
  imperfect: [],
};

perfectVerbs.set(соловеть.name.text, соловеть);

export { соловеть };