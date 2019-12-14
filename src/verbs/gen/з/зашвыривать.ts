import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашвыривать: PerfectVerb = {
  name: Word('зашвыривать', 4),
  singular1stPerson: Word('зашвыриваю', 4),
  singular2ndPerson: Word('зашвыриваешь', 4),
  singular3rdPerson: Word('зашвыривает', 4),
  plural1stPerson: Word('зашвыриваем', 4),
  plural2ndPerson: Word('зашвыриваете', 4),
  plural3rdPerson: Word('зашвыривают', 4),
  masculinePast: Word('зашвыривал', 4),
  femininePast: Word('зашвыривала', 4),
  neuterPast: Word('зашвыривало', 4),
  pluralPast: Word('зашвыривали', 4),
  imperativeInformal: Word('зашвыривай', 4),
  imperativeFormal: Word('зашвыривайте', 4),
  imperfect: [],
};

perfectVerbs.set(зашвыривать.name.text, зашвыривать);

export { зашвыривать };