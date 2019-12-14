import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попотеть: PerfectVerb = {
  name: Word('попотеть', 5),
  singular1stPerson: Word('попотею', 5),
  singular2ndPerson: Word('попотеешь', 5),
  singular3rdPerson: Word('попотеет', 5),
  plural1stPerson: Word('попотеем', 5),
  plural2ndPerson: Word('попотеете', 5),
  plural3rdPerson: Word('попотеют', 5),
  masculinePast: Word('попотел', 5),
  femininePast: Word('попотела', 5),
  neuterPast: Word('попотело', 5),
  pluralPast: Word('попотели', 5),
  imperativeInformal: Word('попотей', 5),
  imperativeFormal: Word('попотейте', 5),
  imperfect: [],
};

perfectVerbs.set(попотеть.name.text, попотеть);

export { попотеть };