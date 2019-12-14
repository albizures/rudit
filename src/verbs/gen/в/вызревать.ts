import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызревать: PerfectVerb = {
  name: Word('вызревать', 6),
  singular1stPerson: Word('вызреваю', 6),
  singular2ndPerson: Word('вызреваешь', 6),
  singular3rdPerson: Word('вызревает', 6),
  plural1stPerson: Word('вызреваем', 6),
  plural2ndPerson: Word('вызреваете', 6),
  plural3rdPerson: Word('вызревают', 6),
  masculinePast: Word('вызревал', 6),
  femininePast: Word('вызревала', 6),
  neuterPast: Word('вызревало', 6),
  pluralPast: Word('вызревали', 6),
  imperativeInformal: Word('вызревай', 6),
  imperativeFormal: Word('вызревайте', 6),
  imperfect: [],
};

perfectVerbs.set(вызревать.name.text, вызревать);

export { вызревать };