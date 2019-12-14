import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поговаривать: PerfectVerb = {
  name: Word('поговаривать', 5),
  singular1stPerson: Word('поговариваю', 5),
  singular2ndPerson: Word('поговариваешь', 5),
  singular3rdPerson: Word('поговаривает', 5),
  plural1stPerson: Word('поговариваем', 5),
  plural2ndPerson: Word('поговариваете', 5),
  plural3rdPerson: Word('поговаривают', 5),
  masculinePast: Word('поговаривал', 5),
  femininePast: Word('поговаривала', 5),
  neuterPast: Word('поговаривало', 5),
  pluralPast: Word('поговаривали', 5),
  imperativeInformal: Word('поговаривай', 5),
  imperativeFormal: Word('поговаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(поговаривать.name.text, поговаривать);

export { поговаривать };