import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскуривать: PerfectVerb = {
  name: Word('раскуривать', 4),
  singular1stPerson: Word('раскуриваю', 4),
  singular2ndPerson: Word('раскуриваешь', 4),
  singular3rdPerson: Word('раскуривает', 4),
  plural1stPerson: Word('раскуриваем', 4),
  plural2ndPerson: Word('раскуриваете', 4),
  plural3rdPerson: Word('раскуривают', 4),
  masculinePast: Word('раскуривал', 4),
  femininePast: Word('раскуривала', 4),
  neuterPast: Word('раскуривало', 4),
  pluralPast: Word('раскуривали', 4),
  imperativeInformal: Word('раскуривай', 4),
  imperativeFormal: Word('раскуривайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскуривать.name.text, раскуривать);

export { раскуривать };