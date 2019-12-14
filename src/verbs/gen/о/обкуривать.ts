import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкуривать: PerfectVerb = {
  name: Word('обкуривать', 3),
  singular1stPerson: Word('обкуриваю', 3),
  singular2ndPerson: Word('обкуриваешь', 3),
  singular3rdPerson: Word('обкуривает', 3),
  plural1stPerson: Word('обкуриваем', 3),
  plural2ndPerson: Word('обкуриваете', 3),
  plural3rdPerson: Word('обкуривают', 3),
  masculinePast: Word('обкуривал', 3),
  femininePast: Word('обкуривала', 3),
  neuterPast: Word('обкуривало', 3),
  pluralPast: Word('обкуривали', 3),
  imperativeInformal: Word('обкуривай', 3),
  imperativeFormal: Word('обкуривайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкуривать.name.text, обкуривать);

export { обкуривать };