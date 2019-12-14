import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потемнеть: PerfectVerb = {
  name: Word('потемнеть', 6),
  singular1stPerson: Word('потемнею', 6),
  singular2ndPerson: Word('потемнеешь', 6),
  singular3rdPerson: Word('потемнеет', 6),
  plural1stPerson: Word('потемнеем', 6),
  plural2ndPerson: Word('потемнеете', 6),
  plural3rdPerson: Word('потемнеют', 6),
  masculinePast: Word('потемнел', 6),
  femininePast: Word('потемнела', 6),
  neuterPast: Word('потемнело', 6),
  pluralPast: Word('потемнели', 6),
  imperativeInformal: Word('потемней', 6),
  imperativeFormal: Word('потемнейте', 6),
  imperfect: [],
};

perfectVerbs.set(потемнеть.name.text, потемнеть);

export { потемнеть };