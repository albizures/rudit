import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сковыривать: PerfectVerb = {
  name: Word('сковыривать', 4),
  singular1stPerson: Word('сковыриваю', 4),
  singular2ndPerson: Word('сковыриваешь', 4),
  singular3rdPerson: Word('сковыривает', 4),
  plural1stPerson: Word('сковыриваем', 4),
  plural2ndPerson: Word('сковыриваете', 4),
  plural3rdPerson: Word('сковыривают', 4),
  masculinePast: Word('сковыривал', 4),
  femininePast: Word('сковыривала', 4),
  neuterPast: Word('сковыривало', 4),
  pluralPast: Word('сковыривали', 4),
  imperativeInformal: Word('сковыривай', 4),
  imperativeFormal: Word('сковыривайте', 4),
  imperfect: [],
};

perfectVerbs.set(сковыривать.name.text, сковыривать);

export { сковыривать };