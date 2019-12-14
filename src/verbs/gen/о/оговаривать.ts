import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оговаривать: PerfectVerb = {
  name: Word('оговаривать', 4),
  singular1stPerson: Word('оговариваю', 4),
  singular2ndPerson: Word('оговариваешь', 4),
  singular3rdPerson: Word('оговаривает', 4),
  plural1stPerson: Word('оговариваем', 4),
  plural2ndPerson: Word('оговариваете', 4),
  plural3rdPerson: Word('оговаривают', 4),
  masculinePast: Word('оговаривал', 4),
  femininePast: Word('оговаривала', 4),
  neuterPast: Word('оговаривало', 4),
  pluralPast: Word('оговаривали', 4),
  imperativeInformal: Word('оговаривай', 4),
  imperativeFormal: Word('оговаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(оговаривать.name.text, оговаривать);

export { оговаривать };