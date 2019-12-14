import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довлеть: PerfectVerb = {
  name: Word('довлеть', 4),
  singular1stPerson: Word('довлею', 4),
  singular2ndPerson: Word('довлеешь', 4),
  singular3rdPerson: Word('довлеет', 4),
  plural1stPerson: Word('довлеем', 4),
  plural2ndPerson: Word('довлеете', 4),
  plural3rdPerson: Word('довлеют', 4),
  masculinePast: Word('довлел', 4),
  femininePast: Word('довлела', 4),
  neuterPast: Word('довлело', 4),
  pluralPast: Word('довлели', 4),
  imperativeInformal: Word('довлей', 4),
  imperativeFormal: Word('довлейте', 4),
  imperfect: [],
};

perfectVerbs.set(довлеть.name.text, довлеть);

export { довлеть };