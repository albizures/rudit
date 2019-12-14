import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запотеть: PerfectVerb = {
  name: Word('запотеть', 5),
  singular1stPerson: Word('запотею', 5),
  singular2ndPerson: Word('запотеешь', 5),
  singular3rdPerson: Word('запотеет', 5),
  plural1stPerson: Word('запотеем', 5),
  plural2ndPerson: Word('запотеете', 5),
  plural3rdPerson: Word('запотеют', 5),
  masculinePast: Word('запотел', 5),
  femininePast: Word('запотела', 5),
  neuterPast: Word('запотело', 5),
  pluralPast: Word('запотели', 5),
  imperativeInformal: Word('запотей', 5),
  imperativeFormal: Word('запотейте', 5),
  imperfect: [],
};

perfectVerbs.set(запотеть.name.text, запотеть);

export { запотеть };