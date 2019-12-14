import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const редеть: PerfectVerb = {
  name: Word('редеть', 3),
  singular1stPerson: Word('редею', 3),
  singular2ndPerson: Word('редеешь', 3),
  singular3rdPerson: Word('редеет', 3),
  plural1stPerson: Word('редеем', 3),
  plural2ndPerson: Word('редеете', 3),
  plural3rdPerson: Word('редеют', 3),
  masculinePast: Word('редел', 3),
  femininePast: Word('редела', 3),
  neuterPast: Word('редело', 3),
  pluralPast: Word('редели', 3),
  imperativeInformal: Word('редей', 3),
  imperativeFormal: Word('редейте', 3),
  imperfect: [],
};

perfectVerbs.set(редеть.name.text, редеть);

export { редеть };