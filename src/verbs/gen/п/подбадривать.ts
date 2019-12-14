import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбадривать: PerfectVerb = {
  name: Word('подбадривать', 4),
  singular1stPerson: Word('подбадриваю', 4),
  singular2ndPerson: Word('подбадриваешь', 4),
  singular3rdPerson: Word('подбадривает', 4),
  plural1stPerson: Word('подбадриваем', 4),
  plural2ndPerson: Word('подбадриваете', 4),
  plural3rdPerson: Word('подбадривают', 4),
  masculinePast: Word('подбадривал', 4),
  femininePast: Word('подбадривала', 4),
  neuterPast: Word('подбадривало', 4),
  pluralPast: Word('подбадривали', 4),
  imperativeInformal: Word('подбадривай', 4),
  imperativeFormal: Word('подбадривайте', 4),
  imperfect: [],
};

perfectVerbs.set(подбадривать.name.text, подбадривать);

export { подбадривать };