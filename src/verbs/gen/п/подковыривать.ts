import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подковыривать: PerfectVerb = {
  name: Word('подковыривать', 6),
  singular1stPerson: Word('подковыриваю', 6),
  singular2ndPerson: Word('подковыриваешь', 6),
  singular3rdPerson: Word('подковыривает', 6),
  plural1stPerson: Word('подковыриваем', 6),
  plural2ndPerson: Word('подковыриваете', 6),
  plural3rdPerson: Word('подковыривают', 6),
  masculinePast: Word('подковыривал', 6),
  femininePast: Word('подковыривала', 6),
  neuterPast: Word('подковыривало', 6),
  pluralPast: Word('подковыривали', 6),
  imperativeInformal: Word('подковыривай', 6),
  imperativeFormal: Word('подковыривайте', 6),
  imperfect: [],
};

perfectVerbs.set(подковыривать.name.text, подковыривать);

export { подковыривать };