import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окуривать: PerfectVerb = {
  name: Word('окуривать', 2),
  singular1stPerson: Word('окуриваю', 2),
  singular2ndPerson: Word('окуриваешь', 2),
  singular3rdPerson: Word('окуривает', 2),
  plural1stPerson: Word('окуриваем', 2),
  plural2ndPerson: Word('окуриваете', 2),
  plural3rdPerson: Word('окуривают', 2),
  masculinePast: Word('окуривал', 2),
  femininePast: Word('окуривала', 2),
  neuterPast: Word('окуривало', 2),
  pluralPast: Word('окуривали', 2),
  imperativeInformal: Word('окуривай', 2),
  imperativeFormal: Word('окуривайте', 2),
  imperfect: [],
};

perfectVerbs.set(окуривать.name.text, окуривать);

export { окуривать };