import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окультуривать: PerfectVerb = {
  name: Word('окультуривать', 6),
  singular1stPerson: Word('окультуриваю', 6),
  singular2ndPerson: Word('окультуриваешь', 6),
  singular3rdPerson: Word('окультуривает', 6),
  plural1stPerson: Word('окультуриваем', 6),
  plural2ndPerson: Word('окультуриваете', 6),
  plural3rdPerson: Word('окультуривают', 6),
  masculinePast: Word('окультуривал', 6),
  femininePast: Word('окультуривала', 6),
  neuterPast: Word('окультуривало', 6),
  pluralPast: Word('окультуривали', 6),
  imperativeInformal: Word('окультуривай', 6),
  imperativeFormal: Word('окультуривайте', 6),
  imperfect: [],
};

perfectVerbs.set(окультуривать.name.text, окультуривать);

export { окультуривать };