import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доваривать: PerfectVerb = {
  name: Word('доваривать', 3),
  singular1stPerson: Word('довариваю', 3),
  singular2ndPerson: Word('довариваешь', 3),
  singular3rdPerson: Word('доваривает', 3),
  plural1stPerson: Word('довариваем', 3),
  plural2ndPerson: Word('довариваете', 3),
  plural3rdPerson: Word('доваривают', 3),
  masculinePast: Word('доваривал', 3),
  femininePast: Word('доваривала', 3),
  neuterPast: Word('доваривало', 3),
  pluralPast: Word('доваривали', 3),
  imperativeInformal: Word('доваривай', 3),
  imperativeFormal: Word('доваривайте', 3),
  imperfect: [],
};

perfectVerbs.set(доваривать.name.text, доваривать);

export { доваривать };