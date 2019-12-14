import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогревать: PerfectVerb = {
  name: Word('прогревать', 7),
  singular1stPerson: Word('прогреваю', 7),
  singular2ndPerson: Word('прогреваешь', 7),
  singular3rdPerson: Word('прогревает', 7),
  plural1stPerson: Word('прогреваем', 7),
  plural2ndPerson: Word('прогреваете', 7),
  plural3rdPerson: Word('прогревают', 7),
  masculinePast: Word('прогревал', 7),
  femininePast: Word('прогревала', 7),
  neuterPast: Word('прогревало', 7),
  pluralPast: Word('прогревали', 7),
  imperativeInformal: Word('прогревай', 7),
  imperativeFormal: Word('прогревайте', 7),
  imperfect: [],
};

perfectVerbs.set(прогревать.name.text, прогревать);

export { прогревать };