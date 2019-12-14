import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарычать: PerfectVerb = {
  name: Word('зарычать', 5),
  singular1stPerson: Word('зарычу', 5),
  singular2ndPerson: Word('зарычишь', 5),
  singular3rdPerson: Word('зарычит', 5),
  plural1stPerson: Word('зарычим', 5),
  plural2ndPerson: Word('зарычите', 5),
  plural3rdPerson: Word('зарычат', 5),
  masculinePast: Word('зарычал', 5),
  femininePast: Word('зарычала', 5),
  neuterPast: Word('зарычало', 5),
  pluralPast: Word('зарычали', 5),
  imperativeInformal: Word('зарычи', 5),
  imperativeFormal: Word('зарычите', 5),
  imperfect: [],
};

perfectVerbs.set(зарычать.name.text, зарычать);

export { зарычать };