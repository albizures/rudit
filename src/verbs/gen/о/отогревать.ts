import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогревать: PerfectVerb = {
  name: Word('отогревать', 7),
  singular1stPerson: Word('отогреваю', 7),
  singular2ndPerson: Word('отогреваешь', 7),
  singular3rdPerson: Word('отогревает', 7),
  plural1stPerson: Word('отогреваем', 7),
  plural2ndPerson: Word('отогреваете', 7),
  plural3rdPerson: Word('отогревают', 7),
  masculinePast: Word('отогревал', 7),
  femininePast: Word('отогревала', 7),
  neuterPast: Word('отогревало', 7),
  pluralPast: Word('отогревали', 7),
  imperativeInformal: Word('отогревай', 7),
  imperativeFormal: Word('отогревайте', 7),
  imperfect: [],
};

perfectVerbs.set(отогревать.name.text, отогревать);

export { отогревать };