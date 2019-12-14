import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созревать: PerfectVerb = {
  name: Word('созревать', 6),
  singular1stPerson: Word('созреваю', 6),
  singular2ndPerson: Word('созреваешь', 6),
  singular3rdPerson: Word('созревает', 6),
  plural1stPerson: Word('созреваем', 6),
  plural2ndPerson: Word('созреваете', 6),
  plural3rdPerson: Word('созревают', 6),
  masculinePast: Word('созревал', 6),
  femininePast: Word('созревала', 6),
  neuterPast: Word('созревало', 6),
  pluralPast: Word('созревали', 6),
  imperativeInformal: Word('созревай', 6),
  imperativeFormal: Word('созревайте', 6),
  imperfect: [],
};

perfectVerbs.set(созревать.name.text, созревать);

export { созревать };