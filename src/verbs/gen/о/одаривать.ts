import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одаривать: PerfectVerb = {
  name: Word('одаривать', 2),
  singular1stPerson: Word('одариваю', 2),
  singular2ndPerson: Word('одариваешь', 2),
  singular3rdPerson: Word('одаривает', 2),
  plural1stPerson: Word('одариваем', 2),
  plural2ndPerson: Word('одариваете', 2),
  plural3rdPerson: Word('одаривают', 2),
  masculinePast: Word('одаривал', 2),
  femininePast: Word('одаривала', 2),
  neuterPast: Word('одаривало', 2),
  pluralPast: Word('одаривали', 2),
  imperativeInformal: Word('одаривай', 2),
  imperativeFormal: Word('одаривайте', 2),
  imperfect: [],
};

perfectVerbs.set(одаривать.name.text, одаривать);

export { одаривать };