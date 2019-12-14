import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затоваривать: PerfectVerb = {
  name: Word('затоваривать', 5),
  singular1stPerson: Word('затовариваю', 5),
  singular2ndPerson: Word('затовариваешь', 5),
  singular3rdPerson: Word('затоваривает', 5),
  plural1stPerson: Word('затовариваем', 5),
  plural2ndPerson: Word('затовариваете', 5),
  plural3rdPerson: Word('затоваривают', 5),
  masculinePast: Word('затоваривал', 5),
  femininePast: Word('затоваривала', 5),
  neuterPast: Word('затоваривало', 5),
  pluralPast: Word('затоваривали', 5),
  imperativeInformal: Word('затоваривай', 5),
  imperativeFormal: Word('затоваривайте', 5),
  imperfect: [],
};

perfectVerbs.set(затоваривать.name.text, затоваривать);

export { затоваривать };