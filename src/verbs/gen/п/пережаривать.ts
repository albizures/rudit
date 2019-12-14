import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережаривать: PerfectVerb = {
  name: Word('пережаривать', 5),
  singular1stPerson: Word('пережариваю', 5),
  singular2ndPerson: Word('пережариваешь', 5),
  singular3rdPerson: Word('пережаривает', 5),
  plural1stPerson: Word('пережариваем', 5),
  plural2ndPerson: Word('пережариваете', 5),
  plural3rdPerson: Word('пережаривают', 5),
  masculinePast: Word('пережаривал', 5),
  femininePast: Word('пережаривала', 5),
  neuterPast: Word('пережаривало', 5),
  pluralPast: Word('пережаривали', 5),
  imperativeInformal: Word('пережаривай', 5),
  imperativeFormal: Word('пережаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(пережаривать.name.text, пережаривать);

export { пережаривать };