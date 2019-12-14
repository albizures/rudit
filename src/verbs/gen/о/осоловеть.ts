import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осоловеть: PerfectVerb = {
  name: Word('осоловеть', 6),
  singular1stPerson: Word('осоловею', 6),
  singular2ndPerson: Word('осоловеешь', 6),
  singular3rdPerson: Word('осоловеет', 6),
  plural1stPerson: Word('осоловеем', 6),
  plural2ndPerson: Word('осоловеете', 6),
  plural3rdPerson: Word('осоловеют', 6),
  masculinePast: Word('осоловел', 6),
  femininePast: Word('осоловела', 6),
  neuterPast: Word('осоловело', 6),
  pluralPast: Word('осоловели', 6),
  imperativeInformal: Word('осоловей', 6),
  imperativeFormal: Word('осоловейте', 6),
  imperfect: [],
};

perfectVerbs.set(осоловеть.name.text, осоловеть);

export { осоловеть };