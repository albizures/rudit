import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаривать: PerfectVerb = {
  name: Word('запаривать', 3),
  singular1stPerson: Word('запариваю', 3),
  singular2ndPerson: Word('запариваешь', 3),
  singular3rdPerson: Word('запаривает', 3),
  plural1stPerson: Word('запариваем', 3),
  plural2ndPerson: Word('запариваете', 3),
  plural3rdPerson: Word('запаривают', 3),
  masculinePast: Word('запаривал', 3),
  femininePast: Word('запаривала', 3),
  neuterPast: Word('запаривало', 3),
  pluralPast: Word('запаривали', 3),
  imperativeInformal: Word('запаривай', 3),
  imperativeFormal: Word('запаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(запаривать.name.text, запаривать);

export { запаривать };