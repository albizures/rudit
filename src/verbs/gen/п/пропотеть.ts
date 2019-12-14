import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропотеть: PerfectVerb = {
  name: Word('пропотеть', 6),
  singular1stPerson: Word('пропотею', 6),
  singular2ndPerson: Word('пропотеешь', 6),
  singular3rdPerson: Word('пропотеет', 6),
  plural1stPerson: Word('пропотеем', 6),
  plural2ndPerson: Word('пропотеете', 6),
  plural3rdPerson: Word('пропотеют', 6),
  masculinePast: Word('пропотел', 6),
  femininePast: Word('пропотела', 6),
  neuterPast: Word('пропотело', 6),
  pluralPast: Word('пропотели', 6),
  imperativeInformal: Word('пропотей', 6),
  imperativeFormal: Word('пропотейте', 6),
  imperfect: [],
};

perfectVerbs.set(пропотеть.name.text, пропотеть);

export { пропотеть };