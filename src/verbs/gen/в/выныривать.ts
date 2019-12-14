import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выныривать: PerfectVerb = {
  name: Word('выныривать', 3),
  singular1stPerson: Word('выныриваю', 3),
  singular2ndPerson: Word('выныриваешь', 3),
  singular3rdPerson: Word('выныривает', 3),
  plural1stPerson: Word('выныриваем', 3),
  plural2ndPerson: Word('выныриваете', 3),
  plural3rdPerson: Word('выныривают', 3),
  masculinePast: Word('выныривал', 3),
  femininePast: Word('выныривала', 3),
  neuterPast: Word('выныривало', 3),
  pluralPast: Word('выныривали', 3),
  imperativeInformal: Word('выныривай', 3),
  imperativeFormal: Word('выныривайте', 3),
  imperfect: [],
};

perfectVerbs.set(выныривать.name.text, выныривать);

export { выныривать };