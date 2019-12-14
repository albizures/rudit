import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачесать: PerfectVerb = {
  name: Word('зачесать', 5),
  singular1stPerson: Word('зачешу', 5),
  singular2ndPerson: Word('зачешешь', 3),
  singular3rdPerson: Word('зачешет', 3),
  plural1stPerson: Word('зачешем', 3),
  plural2ndPerson: Word('зачешете', 3),
  plural3rdPerson: Word('зачешут', 3),
  masculinePast: Word('зачесал', 5),
  femininePast: Word('зачесала', 5),
  neuterPast: Word('зачесало', 5),
  pluralPast: Word('зачесали', 5),
  imperativeInformal: Word('зачеши', 5),
  imperativeFormal: Word('зачешите', 5),
  imperfect: [],
};

perfectVerbs.set(зачесать.name.text, зачесать);

export { зачесать };