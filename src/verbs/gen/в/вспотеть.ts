import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспотеть: PerfectVerb = {
  name: Word('вспотеть', 5),
  singular1stPerson: Word('вспотею', 5),
  singular2ndPerson: Word('вспотеешь', 5),
  singular3rdPerson: Word('вспотеет', 5),
  plural1stPerson: Word('вспотеем', 5),
  plural2ndPerson: Word('вспотеете', 5),
  plural3rdPerson: Word('вспотеют', 5),
  masculinePast: Word('вспотел', 5),
  femininePast: Word('вспотела', 5),
  neuterPast: Word('вспотело', 5),
  pluralPast: Word('вспотели', 5),
  imperativeInformal: Word('вспотей', 5),
  imperativeFormal: Word('вспотейте', 5),
  imperfect: [],
};

perfectVerbs.set(вспотеть.name.text, вспотеть);

export { вспотеть };