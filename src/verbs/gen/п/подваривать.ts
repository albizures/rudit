import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подваривать: PerfectVerb = {
  name: Word('подваривать', 4),
  singular1stPerson: Word('подвариваю', 4),
  singular2ndPerson: Word('подвариваешь', 4),
  singular3rdPerson: Word('подваривает', 4),
  plural1stPerson: Word('подвариваем', 4),
  plural2ndPerson: Word('подвариваете', 4),
  plural3rdPerson: Word('подваривают', 4),
  masculinePast: Word('подваривал', 4),
  femininePast: Word('подваривала', 4),
  neuterPast: Word('подваривало', 4),
  pluralPast: Word('подваривали', 4),
  imperativeInformal: Word('подваривай', 4),
  imperativeFormal: Word('подваривайте', 4),
  imperfect: [],
};

perfectVerbs.set(подваривать.name.text, подваривать);

export { подваривать };