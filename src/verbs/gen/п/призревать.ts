import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призревать: PerfectVerb = {
  name: Word('призревать', 7),
  singular1stPerson: Word('призреваю', 7),
  singular2ndPerson: Word('призреваешь', 7),
  singular3rdPerson: Word('призревает', 7),
  plural1stPerson: Word('призреваем', 7),
  plural2ndPerson: Word('призреваете', 7),
  plural3rdPerson: Word('призревают', 7),
  masculinePast: Word('призревал', 7),
  femininePast: Word('призревала', 7),
  neuterPast: Word('призревало', 7),
  pluralPast: Word('призревали', 7),
  imperativeInformal: Word('призревай', 7),
  imperativeFormal: Word('призревайте', 7),
  imperfect: [],
};

perfectVerbs.set(призревать.name.text, призревать);

export { призревать };