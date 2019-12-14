import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наваривать: PerfectVerb = {
  name: Word('наваривать', 3),
  singular1stPerson: Word('навариваю', 3),
  singular2ndPerson: Word('навариваешь', 3),
  singular3rdPerson: Word('наваривает', 3),
  plural1stPerson: Word('навариваем', 3),
  plural2ndPerson: Word('навариваете', 3),
  plural3rdPerson: Word('наваривают', 3),
  masculinePast: Word('наваривал', 3),
  femininePast: Word('наваривала', 3),
  neuterPast: Word('наваривало', 3),
  pluralPast: Word('наваривали', 3),
  imperativeInformal: Word('наваривай', 3),
  imperativeFormal: Word('наваривайте', 3),
  imperfect: [],
};

perfectVerbs.set(наваривать.name.text, наваривать);

export { наваривать };