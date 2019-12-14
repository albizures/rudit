import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отговаривать: PerfectVerb = {
  name: Word('отговаривать', 5),
  singular1stPerson: Word('отговариваю', 5),
  singular2ndPerson: Word('отговариваешь', 5),
  singular3rdPerson: Word('отговаривает', 5),
  plural1stPerson: Word('отговариваем', 5),
  plural2ndPerson: Word('отговариваете', 5),
  plural3rdPerson: Word('отговаривают', 5),
  masculinePast: Word('отговаривал', 5),
  femininePast: Word('отговаривала', 5),
  neuterPast: Word('отговаривало', 5),
  pluralPast: Word('отговаривали', 5),
  imperativeInformal: Word('отговаривай', 5),
  imperativeFormal: Word('отговаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(отговаривать.name.text, отговаривать);

export { отговаривать };