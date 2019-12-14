import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпаривать: PerfectVerb = {
  name: Word('выпаривать', 3),
  singular1stPerson: Word('выпариваю', 3),
  singular2ndPerson: Word('выпариваешь', 3),
  singular3rdPerson: Word('выпаривает', 3),
  plural1stPerson: Word('выпариваем', 3),
  plural2ndPerson: Word('выпариваете', 3),
  plural3rdPerson: Word('выпаривают', 3),
  masculinePast: Word('выпаривал', 3),
  femininePast: Word('выпаривала', 3),
  neuterPast: Word('выпаривало', 3),
  pluralPast: Word('выпаривали', 3),
  imperativeInformal: Word('выпаривай', 3),
  imperativeFormal: Word('выпаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпаривать.name.text, выпаривать);

export { выпаривать };