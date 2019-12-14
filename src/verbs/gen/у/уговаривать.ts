import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уговаривать: PerfectVerb = {
  name: Word('уговаривать', 4),
  singular1stPerson: Word('уговариваю', 4),
  singular2ndPerson: Word('уговариваешь', 4),
  singular3rdPerson: Word('уговаривает', 4),
  plural1stPerson: Word('уговариваем', 4),
  plural2ndPerson: Word('уговариваете', 4),
  plural3rdPerson: Word('уговаривают', 4),
  masculinePast: Word('уговаривал', 4),
  femininePast: Word('уговаривала', 4),
  neuterPast: Word('уговаривало', 4),
  pluralPast: Word('уговаривали', 4),
  imperativeInformal: Word('уговаривай', 4),
  imperativeFormal: Word('уговаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(уговаривать.name.text, уговаривать);

export { уговаривать };