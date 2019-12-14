import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачать: PerfectVerb = {
  name: Word('зачать', 3),
  singular1stPerson: Word('зачну', 4),
  singular2ndPerson: Word('зачнёшь', 4),
  singular3rdPerson: Word('зачнёт', 4),
  plural1stPerson: Word('зачнём', 4),
  plural2ndPerson: Word('зачнёте', 4),
  plural3rdPerson: Word('зачнут', 4),
  masculinePast: Word('зачал', 3),
  femininePast: Word('зачала', 5),
  neuterPast: Word('зачало', 3),
  pluralPast: Word('зачали', 3),
  imperativeInformal: Word('зачни', 4),
  imperativeFormal: Word('зачните', 4),
  imperfect: [],
};

perfectVerbs.set(зачать.name.text, зачать);

export { зачать };