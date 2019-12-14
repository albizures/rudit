import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассматривать: PerfectVerb = {
  name: Word('рассматривать', 5),
  singular1stPerson: Word('рассматриваю', 5),
  singular2ndPerson: Word('рассматриваешь', 5),
  singular3rdPerson: Word('рассматривает', 5),
  plural1stPerson: Word('рассматриваем', 5),
  plural2ndPerson: Word('рассматриваете', 5),
  plural3rdPerson: Word('рассматривают', 5),
  masculinePast: Word('рассматривал', 5),
  femininePast: Word('рассматривала', 5),
  neuterPast: Word('рассматривало', 5),
  pluralPast: Word('рассматривали', 5),
  imperativeInformal: Word('рассматривай', 5),
  imperativeFormal: Word('рассматривайте', 5),
  imperfect: ['рассмотреть'],
};

perfectVerbs.set(рассматривать.name.text, рассматривать);

export { рассматривать };