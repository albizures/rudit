import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокуривать: PerfectVerb = {
  name: Word('прокуривать', 4),
  singular1stPerson: Word('прокуриваю', 4),
  singular2ndPerson: Word('прокуриваешь', 4),
  singular3rdPerson: Word('прокуривает', 4),
  plural1stPerson: Word('прокуриваем', 4),
  plural2ndPerson: Word('прокуриваете', 4),
  plural3rdPerson: Word('прокуривают', 4),
  masculinePast: Word('прокуривал', 4),
  femininePast: Word('прокуривала', 4),
  neuterPast: Word('прокуривало', 4),
  pluralPast: Word('прокуривали', 4),
  imperativeInformal: Word('прокуривай', 4),
  imperativeFormal: Word('прокуривайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокуривать.name.text, прокуривать);

export { прокуривать };