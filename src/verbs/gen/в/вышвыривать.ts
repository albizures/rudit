import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышвыривать: PerfectVerb = {
  name: Word('вышвыривать', 4),
  singular1stPerson: Word('вышвыриваю', 4),
  singular2ndPerson: Word('вышвыриваешь', 4),
  singular3rdPerson: Word('вышвыривает', 4),
  plural1stPerson: Word('вышвыриваем', 4),
  plural2ndPerson: Word('вышвыриваете', 4),
  plural3rdPerson: Word('вышвыривают', 4),
  masculinePast: Word('вышвыривал', 4),
  femininePast: Word('вышвыривала', 4),
  neuterPast: Word('вышвыривало', 4),
  pluralPast: Word('вышвыривали', 4),
  imperativeInformal: Word('вышвыривай', 4),
  imperativeFormal: Word('вышвыривайте', 4),
  imperfect: [],
};

perfectVerbs.set(вышвыривать.name.text, вышвыривать);

export { вышвыривать };