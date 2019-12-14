import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшвыривать: PerfectVerb = {
  name: Word('расшвыривать', 5),
  singular1stPerson: Word('расшвыриваю', 5),
  singular2ndPerson: Word('расшвыриваешь', 5),
  singular3rdPerson: Word('расшвыривает', 5),
  plural1stPerson: Word('расшвыриваем', 5),
  plural2ndPerson: Word('расшвыриваете', 5),
  plural3rdPerson: Word('расшвыривают', 5),
  masculinePast: Word('расшвыривал', 5),
  femininePast: Word('расшвыривала', 5),
  neuterPast: Word('расшвыривало', 5),
  pluralPast: Word('расшвыривали', 5),
  imperativeInformal: Word('расшвыривай', 5),
  imperativeFormal: Word('расшвыривайте', 5),
  imperfect: [],
};

perfectVerbs.set(расшвыривать.name.text, расшвыривать);

export { расшвыривать };