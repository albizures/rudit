import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подныривать: PerfectVerb = {
  name: Word('подныривать', 4),
  singular1stPerson: Word('подныриваю', 4),
  singular2ndPerson: Word('подныриваешь', 4),
  singular3rdPerson: Word('подныривает', 4),
  plural1stPerson: Word('подныриваем', 4),
  plural2ndPerson: Word('подныриваете', 4),
  plural3rdPerson: Word('подныривают', 4),
  masculinePast: Word('подныривал', 4),
  femininePast: Word('подныривала', 4),
  neuterPast: Word('подныривало', 4),
  pluralPast: Word('подныривали', 4),
  imperativeInformal: Word('подныривай', 4),
  imperativeFormal: Word('подныривайте', 4),
  imperfect: [],
};

perfectVerbs.set(подныривать.name.text, подныривать);

export { подныривать };