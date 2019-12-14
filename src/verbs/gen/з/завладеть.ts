import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завладеть: PerfectVerb = {
  name: Word('завладеть', 6),
  singular1stPerson: Word('завладею', 6),
  singular2ndPerson: Word('завладеешь', 6),
  singular3rdPerson: Word('завладеет', 6),
  plural1stPerson: Word('завладеем', 6),
  plural2ndPerson: Word('завладеете', 6),
  plural3rdPerson: Word('завладеют', 6),
  masculinePast: Word('завладел', 6),
  femininePast: Word('завладела', 6),
  neuterPast: Word('завладело', 6),
  pluralPast: Word('завладели', 6),
  imperativeInformal: Word('завладей', 6),
  imperativeFormal: Word('завладейте', 6),
  imperfect: [],
};

perfectVerbs.set(завладеть.name.text, завладеть);

export { завладеть };