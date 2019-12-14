import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припаривать: PerfectVerb = {
  name: Word('припаривать', 4),
  singular1stPerson: Word('припариваю', 4),
  singular2ndPerson: Word('припариваешь', 4),
  singular3rdPerson: Word('припаривает', 4),
  plural1stPerson: Word('припариваем', 4),
  plural2ndPerson: Word('припариваете', 4),
  plural3rdPerson: Word('припаривают', 4),
  masculinePast: Word('припаривал', 4),
  femininePast: Word('припаривала', 4),
  neuterPast: Word('припаривало', 4),
  pluralPast: Word('припаривали', 4),
  imperativeInformal: Word('припаривай', 4),
  imperativeFormal: Word('припаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(припаривать.name.text, припаривать);

export { припаривать };