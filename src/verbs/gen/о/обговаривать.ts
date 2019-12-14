import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обговаривать: PerfectVerb = {
  name: Word('обговаривать', 5),
  singular1stPerson: Word('обговариваю', 5),
  singular2ndPerson: Word('обговариваешь', 5),
  singular3rdPerson: Word('обговаривает', 5),
  plural1stPerson: Word('обговариваем', 5),
  plural2ndPerson: Word('обговариваете', 5),
  plural3rdPerson: Word('обговаривают', 5),
  masculinePast: Word('обговаривал', 5),
  femininePast: Word('обговаривала', 5),
  neuterPast: Word('обговаривало', 5),
  pluralPast: Word('обговаривали', 5),
  imperativeInformal: Word('обговаривай', 5),
  imperativeFormal: Word('обговаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(обговаривать.name.text, обговаривать);

export { обговаривать };