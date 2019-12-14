import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осматривать: PerfectVerb = {
  name: Word('осматривать', 3),
  singular1stPerson: Word('осматриваю', 3),
  singular2ndPerson: Word('осматриваешь', 3),
  singular3rdPerson: Word('осматривает', 3),
  plural1stPerson: Word('осматриваем', 3),
  plural2ndPerson: Word('осматриваете', 3),
  plural3rdPerson: Word('осматривают', 3),
  masculinePast: Word('осматривал', 3),
  femininePast: Word('осматривала', 3),
  neuterPast: Word('осматривало', 3),
  pluralPast: Word('осматривали', 3),
  imperativeInformal: Word('осматривай', 3),
  imperativeFormal: Word('осматривайте', 3),
  imperfect: ['осмотреть'],
};

perfectVerbs.set(осматривать.name.text, осматривать);

export { осматривать };