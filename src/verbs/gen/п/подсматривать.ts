import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсматривать: PerfectVerb = {
  name: Word('подсматривать', 5),
  singular1stPerson: Word('подсматриваю', 5),
  singular2ndPerson: Word('подсматриваешь', 5),
  singular3rdPerson: Word('подсматривает', 5),
  plural1stPerson: Word('подсматриваем', 5),
  plural2ndPerson: Word('подсматриваете', 5),
  plural3rdPerson: Word('подсматривают', 5),
  masculinePast: Word('подсматривал', 5),
  femininePast: Word('подсматривала', 5),
  neuterPast: Word('подсматривало', 5),
  pluralPast: Word('подсматривали', 5),
  imperativeInformal: Word('подсматривай', 5),
  imperativeFormal: Word('подсматривайте', 5),
  imperfect: ['подсмотреть'],
};

perfectVerbs.set(подсматривать.name.text, подсматривать);

export { подсматривать };