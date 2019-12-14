import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезревать: PerfectVerb = {
  name: Word('перезревать', 8),
  singular1stPerson: Word('перезреваю', 8),
  singular2ndPerson: Word('перезреваешь', 8),
  singular3rdPerson: Word('перезревает', 8),
  plural1stPerson: Word('перезреваем', 8),
  plural2ndPerson: Word('перезреваете', 8),
  plural3rdPerson: Word('перезревают', 8),
  masculinePast: Word('перезревал', 8),
  femininePast: Word('перезревала', 8),
  neuterPast: Word('перезревало', 8),
  pluralPast: Word('перезревали', 8),
  imperativeInformal: Word('перезревай', 8),
  imperativeFormal: Word('перезревайте', 8),
  imperfect: [],
};

perfectVerbs.set(перезревать.name.text, перезревать);

export { перезревать };