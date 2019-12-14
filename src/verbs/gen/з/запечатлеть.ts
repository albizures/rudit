import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечатлеть: PerfectVerb = {
  name: Word('запечатлеть', 8),
  singular1stPerson: Word('запечатлею', 8),
  singular2ndPerson: Word('запечатлеешь', 8),
  singular3rdPerson: Word('запечатлеет', 8),
  plural1stPerson: Word('запечатлеем', 8),
  plural2ndPerson: Word('запечатлеете', 8),
  plural3rdPerson: Word('запечатлеют', 8),
  masculinePast: Word('запечатлел', 8),
  femininePast: Word('запечатлела', 8),
  neuterPast: Word('запечатлело', 8),
  pluralPast: Word('запечатлели', 8),
  imperativeInformal: Word('запечатлей', 8),
  imperativeFormal: Word('запечатлейте', 8),
  imperfect: [],
};

perfectVerbs.set(запечатлеть.name.text, запечатлеть);

export { запечатлеть };