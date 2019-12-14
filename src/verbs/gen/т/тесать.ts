import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тесать: PerfectVerb = {
  name: Word('тесать', 3),
  singular1stPerson: Word('тешу', 3),
  singular2ndPerson: Word('тешешь', 1),
  singular3rdPerson: Word('тешет', 1),
  plural1stPerson: Word('тешем', 1),
  plural2ndPerson: Word('тешете', 1),
  plural3rdPerson: Word('тешут', 1),
  masculinePast: Word('тесал', 3),
  femininePast: Word('тесала', 3),
  neuterPast: Word('тесало', 3),
  pluralPast: Word('тесали', 3),
  imperativeInformal: Word('теши', 3),
  imperativeFormal: Word('тешите', 3),
  imperfect: [],
};

perfectVerbs.set(тесать.name.text, тесать);

export { тесать };