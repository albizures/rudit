import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздаривать: PerfectVerb = {
  name: Word('раздаривать', 4),
  singular1stPerson: Word('раздариваю', 4),
  singular2ndPerson: Word('раздариваешь', 4),
  singular3rdPerson: Word('раздаривает', 4),
  plural1stPerson: Word('раздариваем', 4),
  plural2ndPerson: Word('раздариваете', 4),
  plural3rdPerson: Word('раздаривают', 4),
  masculinePast: Word('раздаривал', 4),
  femininePast: Word('раздаривала', 4),
  neuterPast: Word('раздаривало', 4),
  pluralPast: Word('раздаривали', 4),
  imperativeInformal: Word('раздаривай', 4),
  imperativeFormal: Word('раздаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(раздаривать.name.text, раздаривать);

export { раздаривать };