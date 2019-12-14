import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выговаривать: PerfectVerb = {
  name: Word('выговаривать', 5),
  singular1stPerson: Word('выговариваю', 5),
  singular2ndPerson: Word('выговариваешь', 5),
  singular3rdPerson: Word('выговаривает', 5),
  plural1stPerson: Word('выговариваем', 5),
  plural2ndPerson: Word('выговариваете', 5),
  plural3rdPerson: Word('выговаривают', 5),
  masculinePast: Word('выговаривал', 5),
  femininePast: Word('выговаривала', 5),
  neuterPast: Word('выговаривало', 5),
  pluralPast: Word('выговаривали', 5),
  imperativeInformal: Word('выговаривай', 5),
  imperativeFormal: Word('выговаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(выговаривать.name.text, выговаривать);

export { выговаривать };