import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшвыривать: PerfectVerb = {
  name: Word('отшвыривать', 4),
  singular1stPerson: Word('отшвыриваю', 4),
  singular2ndPerson: Word('отшвыриваешь', 4),
  singular3rdPerson: Word('отшвыривает', 4),
  plural1stPerson: Word('отшвыриваем', 4),
  plural2ndPerson: Word('отшвыриваете', 4),
  plural3rdPerson: Word('отшвыривают', 4),
  masculinePast: Word('отшвыривал', 4),
  femininePast: Word('отшвыривала', 4),
  neuterPast: Word('отшвыривало', 4),
  pluralPast: Word('отшвыривали', 4),
  imperativeInformal: Word('отшвыривай', 4),
  imperativeFormal: Word('отшвыривайте', 4),
  imperfect: [],
};

perfectVerbs.set(отшвыривать.name.text, отшвыривать);

export { отшвыривать };