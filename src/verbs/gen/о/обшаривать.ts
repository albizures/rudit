import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшаривать: PerfectVerb = {
  name: Word('обшаривать', 3),
  singular1stPerson: Word('обшариваю', 3),
  singular2ndPerson: Word('обшариваешь', 3),
  singular3rdPerson: Word('обшаривает', 3),
  plural1stPerson: Word('обшариваем', 3),
  plural2ndPerson: Word('обшариваете', 3),
  plural3rdPerson: Word('обшаривают', 3),
  masculinePast: Word('обшаривал', 3),
  femininePast: Word('обшаривала', 3),
  neuterPast: Word('обшаривало', 3),
  pluralPast: Word('обшаривали', 3),
  imperativeInformal: Word('обшаривай', 3),
  imperativeFormal: Word('обшаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(обшаривать.name.text, обшаривать);

export { обшаривать };