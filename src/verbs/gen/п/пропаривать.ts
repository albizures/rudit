import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропаривать: PerfectVerb = {
  name: Word('пропаривать', 4),
  singular1stPerson: Word('пропариваю', 4),
  singular2ndPerson: Word('пропариваешь', 4),
  singular3rdPerson: Word('пропаривает', 4),
  plural1stPerson: Word('пропариваем', 4),
  plural2ndPerson: Word('пропариваете', 4),
  plural3rdPerson: Word('пропаривают', 4),
  masculinePast: Word('пропаривал', 4),
  femininePast: Word('пропаривала', 4),
  neuterPast: Word('пропаривало', 4),
  pluralPast: Word('пропаривали', 4),
  imperativeInformal: Word('пропаривай', 4),
  imperativeFormal: Word('пропаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(пропаривать.name.text, пропаривать);

export { пропаривать };