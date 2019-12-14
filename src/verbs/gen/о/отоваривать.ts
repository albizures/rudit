import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отоваривать: PerfectVerb = {
  name: Word('отоваривать', 4),
  singular1stPerson: Word('отовариваю', 4),
  singular2ndPerson: Word('отовариваешь', 4),
  singular3rdPerson: Word('отоваривает', 4),
  plural1stPerson: Word('отовариваем', 4),
  plural2ndPerson: Word('отовариваете', 4),
  plural3rdPerson: Word('отоваривают', 4),
  masculinePast: Word('отоваривал', 4),
  femininePast: Word('отоваривала', 4),
  neuterPast: Word('отоваривало', 4),
  pluralPast: Word('отоваривали', 4),
  imperativeInformal: Word('отоваривай', 4),
  imperativeFormal: Word('отоваривайте', 4),
  imperfect: [],
};

perfectVerbs.set(отоваривать.name.text, отоваривать);

export { отоваривать };