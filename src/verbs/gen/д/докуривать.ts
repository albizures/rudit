import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докуривать: PerfectVerb = {
  name: Word('докуривать', 3),
  singular1stPerson: Word('докуриваю', 3),
  singular2ndPerson: Word('докуриваешь', 3),
  singular3rdPerson: Word('докуривает', 3),
  plural1stPerson: Word('докуриваем', 3),
  plural2ndPerson: Word('докуриваете', 3),
  plural3rdPerson: Word('докуривают', 3),
  masculinePast: Word('докуривал', 3),
  femininePast: Word('докуривала', 3),
  neuterPast: Word('докуривало', 3),
  pluralPast: Word('докуривали', 3),
  imperativeInformal: Word('докуривай', 3),
  imperativeFormal: Word('докуривайте', 3),
  imperfect: [],
};

perfectVerbs.set(докуривать.name.text, докуривать);

export { докуривать };