import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посматривать: PerfectVerb = {
  name: Word('посматривать', 4),
  singular1stPerson: Word('посматриваю', 4),
  singular2ndPerson: Word('посматриваешь', 4),
  singular3rdPerson: Word('посматривает', 4),
  plural1stPerson: Word('посматриваем', 4),
  plural2ndPerson: Word('посматриваете', 4),
  plural3rdPerson: Word('посматривают', 4),
  masculinePast: Word('посматривал', 4),
  femininePast: Word('посматривала', 4),
  neuterPast: Word('посматривало', 4),
  pluralPast: Word('посматривали', 4),
  imperativeInformal: Word('посматривай', 4),
  imperativeFormal: Word('посматривайте', 4),
  imperfect: [],
};

perfectVerbs.set(посматривать.name.text, посматривать);

export { посматривать };