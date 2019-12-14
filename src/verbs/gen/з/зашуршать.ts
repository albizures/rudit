import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашуршать: PerfectVerb = {
  name: Word('зашуршать', 6),
  singular1stPerson: Word('зашуршу', 6),
  singular2ndPerson: Word('зашуршишь', 6),
  singular3rdPerson: Word('зашуршит', 6),
  plural1stPerson: Word('зашуршим', 6),
  plural2ndPerson: Word('зашуршите', 6),
  plural3rdPerson: Word('зашуршат', 6),
  masculinePast: Word('зашуршал', 6),
  femininePast: Word('зашуршала', 6),
  neuterPast: Word('зашуршало', 6),
  pluralPast: Word('зашуршали', 6),
  imperativeInformal: Word('зашурши', 6),
  imperativeFormal: Word('зашуршите', 6),
  imperfect: [],
};

perfectVerbs.set(зашуршать.name.text, зашуршать);

export { зашуршать };