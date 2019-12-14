import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкуривать: PerfectVerb = {
  name: Word('выкуривать', 3),
  singular1stPerson: Word('выкуриваю', 3),
  singular2ndPerson: Word('выкуриваешь', 3),
  singular3rdPerson: Word('выкуривает', 3),
  plural1stPerson: Word('выкуриваем', 3),
  plural2ndPerson: Word('выкуриваете', 3),
  plural3rdPerson: Word('выкуривают', 3),
  masculinePast: Word('выкуривал', 3),
  femininePast: Word('выкуривала', 3),
  neuterPast: Word('выкуривало', 3),
  pluralPast: Word('выкуривали', 3),
  imperativeInformal: Word('выкуривай', 3),
  imperativeFormal: Word('выкуривайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкуривать.name.text, выкуривать);

export { выкуривать };