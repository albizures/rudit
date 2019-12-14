import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжаривать: PerfectVerb = {
  name: Word('обжаривать', 3),
  singular1stPerson: Word('обжариваю', 3),
  singular2ndPerson: Word('обжариваешь', 3),
  singular3rdPerson: Word('обжаривает', 3),
  plural1stPerson: Word('обжариваем', 3),
  plural2ndPerson: Word('обжариваете', 3),
  plural3rdPerson: Word('обжаривают', 3),
  masculinePast: Word('обжаривал', 3),
  femininePast: Word('обжаривала', 3),
  neuterPast: Word('обжаривало', 3),
  pluralPast: Word('обжаривали', 3),
  imperativeInformal: Word('обжаривай', 3),
  imperativeFormal: Word('обжаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(обжаривать.name.text, обжаривать);

export { обжаривать };