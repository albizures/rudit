import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почесать: PerfectVerb = {
  name: Word('почесать', 5),
  singular1stPerson: Word('почешу', 5),
  singular2ndPerson: Word('почешешь', 3),
  singular3rdPerson: Word('почешет', 3),
  plural1stPerson: Word('почешем', 3),
  plural2ndPerson: Word('почешете', 3),
  plural3rdPerson: Word('почешут', 3),
  masculinePast: Word('почесал', 5),
  femininePast: Word('почесала', 5),
  neuterPast: Word('почесало', 5),
  pluralPast: Word('почесали', 5),
  imperativeInformal: Word('почеши', 5),
  imperativeFormal: Word('почешите', 5),
  imperfect: [],
};

perfectVerbs.set(почесать.name.text, почесать);

export { почесать };