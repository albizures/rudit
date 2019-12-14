import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наговаривать: PerfectVerb = {
  name: Word('наговаривать', 5),
  singular1stPerson: Word('наговариваю', 5),
  singular2ndPerson: Word('наговариваешь', 5),
  singular3rdPerson: Word('наговаривает', 5),
  plural1stPerson: Word('наговариваем', 5),
  plural2ndPerson: Word('наговариваете', 5),
  plural3rdPerson: Word('наговаривают', 5),
  masculinePast: Word('наговаривал', 5),
  femininePast: Word('наговаривала', 5),
  neuterPast: Word('наговаривало', 5),
  pluralPast: Word('наговаривали', 5),
  imperativeInformal: Word('наговаривай', 5),
  imperativeFormal: Word('наговаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(наговаривать.name.text, наговаривать);

export { наговаривать };