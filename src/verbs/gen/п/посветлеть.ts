import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посветлеть: PerfectVerb = {
  name: Word('посветлеть', 7),
  singular1stPerson: Word('посветлею', 7),
  singular2ndPerson: Word('посветлеешь', 7),
  singular3rdPerson: Word('посветлеет', 7),
  plural1stPerson: Word('посветлеем', 7),
  plural2ndPerson: Word('посветлеете', 7),
  plural3rdPerson: Word('посветлеют', 7),
  masculinePast: Word('посветлел', 7),
  femininePast: Word('посветлела', 7),
  neuterPast: Word('посветлело', 7),
  pluralPast: Word('посветлели', 7),
  imperativeInformal: Word('посветлей', 7),
  imperativeFormal: Word('посветлейте', 7),
  imperfect: [],
};

perfectVerbs.set(посветлеть.name.text, посветлеть);

export { посветлеть };