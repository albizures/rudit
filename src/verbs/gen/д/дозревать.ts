import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозревать: PerfectVerb = {
  name: Word('дозревать', 6),
  singular1stPerson: Word('дозреваю', 6),
  singular2ndPerson: Word('дозреваешь', 6),
  singular3rdPerson: Word('дозревает', 6),
  plural1stPerson: Word('дозреваем', 6),
  plural2ndPerson: Word('дозреваете', 6),
  plural3rdPerson: Word('дозревают', 6),
  masculinePast: Word('дозревал', 6),
  femininePast: Word('дозревала', 6),
  neuterPast: Word('дозревало', 6),
  pluralPast: Word('дозревали', 6),
  imperativeInformal: Word('дозревай', 6),
  imperativeFormal: Word('дозревайте', 6),
  imperfect: [],
};

perfectVerbs.set(дозревать.name.text, дозревать);

export { дозревать };