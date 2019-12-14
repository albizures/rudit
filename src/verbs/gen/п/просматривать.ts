import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просматривать: PerfectVerb = {
  name: Word('просматривать', 5),
  singular1stPerson: Word('просматриваю', 5),
  singular2ndPerson: Word('просматриваешь', 5),
  singular3rdPerson: Word('просматривает', 5),
  plural1stPerson: Word('просматриваем', 5),
  plural2ndPerson: Word('просматриваете', 5),
  plural3rdPerson: Word('просматривают', 5),
  masculinePast: Word('просматривал', 5),
  femininePast: Word('просматривала', 5),
  neuterPast: Word('просматривало', 5),
  pluralPast: Word('просматривали', 5),
  imperativeInformal: Word('просматривай', 5),
  imperativeFormal: Word('просматривайте', 5),
  imperfect: [],
};

perfectVerbs.set(просматривать.name.text, просматривать);

export { просматривать };