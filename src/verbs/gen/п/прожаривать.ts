import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожаривать: PerfectVerb = {
  name: Word('прожаривать', 4),
  singular1stPerson: Word('прожариваю', 4),
  singular2ndPerson: Word('прожариваешь', 4),
  singular3rdPerson: Word('прожаривает', 4),
  plural1stPerson: Word('прожариваем', 4),
  plural2ndPerson: Word('прожариваете', 4),
  plural3rdPerson: Word('прожаривают', 4),
  masculinePast: Word('прожаривал', 4),
  femininePast: Word('прожаривала', 4),
  neuterPast: Word('прожаривало', 4),
  pluralPast: Word('прожаривали', 4),
  imperativeInformal: Word('прожаривай', 4),
  imperativeFormal: Word('прожаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(прожаривать.name.text, прожаривать);

export { прожаривать };