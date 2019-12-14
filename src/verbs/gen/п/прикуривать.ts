import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикуривать: PerfectVerb = {
  name: Word('прикуривать', 4),
  singular1stPerson: Word('прикуриваю', 4),
  singular2ndPerson: Word('прикуриваешь', 4),
  singular3rdPerson: Word('прикуривает', 4),
  plural1stPerson: Word('прикуриваем', 4),
  plural2ndPerson: Word('прикуриваете', 4),
  plural3rdPerson: Word('прикуривают', 4),
  masculinePast: Word('прикуривал', 4),
  femininePast: Word('прикуривала', 4),
  neuterPast: Word('прикуривало', 4),
  pluralPast: Word('прикуривали', 4),
  imperativeInformal: Word('прикуривай', 4),
  imperativeFormal: Word('прикуривайте', 4),
  imperfect: [],
};

perfectVerbs.set(прикуривать.name.text, прикуривать);

export { прикуривать };