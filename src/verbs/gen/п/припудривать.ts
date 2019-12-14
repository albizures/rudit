import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припудривать: PerfectVerb = {
  name: Word('припудривать', 4),
  singular1stPerson: Word('припудриваю', 4),
  singular2ndPerson: Word('припудриваешь', 4),
  singular3rdPerson: Word('припудривает', 4),
  plural1stPerson: Word('припудриваем', 4),
  plural2ndPerson: Word('припудриваете', 4),
  plural3rdPerson: Word('припудривают', 4),
  masculinePast: Word('припудривал', 4),
  femininePast: Word('припудривала', 4),
  neuterPast: Word('припудривало', 4),
  pluralPast: Word('припудривали', 4),
  imperativeInformal: Word('припудривай', 4),
  imperativeFormal: Word('припудривайте', 4),
  imperfect: [],
};

perfectVerbs.set(припудривать.name.text, припудривать);

export { припудривать };