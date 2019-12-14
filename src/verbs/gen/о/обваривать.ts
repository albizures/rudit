import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обваривать: PerfectVerb = {
  name: Word('обваривать', 3),
  singular1stPerson: Word('обвариваю', 3),
  singular2ndPerson: Word('обвариваешь', 3),
  singular3rdPerson: Word('обваривает', 3),
  plural1stPerson: Word('обвариваем', 3),
  plural2ndPerson: Word('обвариваете', 3),
  plural3rdPerson: Word('обваривают', 3),
  masculinePast: Word('обваривал', 3),
  femininePast: Word('обваривала', 3),
  neuterPast: Word('обваривало', 3),
  pluralPast: Word('обваривали', 3),
  imperativeInformal: Word('обваривай', 3),
  imperativeFormal: Word('обваривайте', 3),
  imperfect: [],
};

perfectVerbs.set(обваривать.name.text, обваривать);

export { обваривать };