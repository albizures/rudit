import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разваривать: PerfectVerb = {
  name: Word('разваривать', 4),
  singular1stPerson: Word('развариваю', 4),
  singular2ndPerson: Word('развариваешь', 4),
  singular3rdPerson: Word('разваривает', 4),
  plural1stPerson: Word('развариваем', 4),
  plural2ndPerson: Word('развариваете', 4),
  plural3rdPerson: Word('разваривают', 4),
  masculinePast: Word('разваривал', 4),
  femininePast: Word('разваривала', 4),
  neuterPast: Word('разваривало', 4),
  pluralPast: Word('разваривали', 4),
  imperativeInformal: Word('разваривай', 4),
  imperativeFormal: Word('разваривайте', 4),
  imperfect: [],
};

perfectVerbs.set(разваривать.name.text, разваривать);

export { разваривать };