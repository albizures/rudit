import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбривать: PerfectVerb = {
  name: Word('подбривать', 7),
  singular1stPerson: Word('подбриваю', 7),
  singular2ndPerson: Word('подбриваешь', 7),
  singular3rdPerson: Word('подбривает', 7),
  plural1stPerson: Word('подбриваем', 7),
  plural2ndPerson: Word('подбриваете', 7),
  plural3rdPerson: Word('подбривают', 7),
  masculinePast: Word('подбривал', 7),
  femininePast: Word('подбривала', 7),
  neuterPast: Word('подбривало', 7),
  pluralPast: Word('подбривали', 7),
  imperativeInformal: Word('подбривай', 7),
  imperativeFormal: Word('подбривайте', 7),
  imperfect: [],
};

perfectVerbs.set(подбривать.name.text, подбривать);

export { подбривать };