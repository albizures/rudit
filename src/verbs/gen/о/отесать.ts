import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отесать: PerfectVerb = {
  name: Word('отесать', 4),
  singular1stPerson: Word('отешу', 4),
  singular2ndPerson: Word('отешешь', 2),
  singular3rdPerson: Word('отешет', 2),
  plural1stPerson: Word('отешем', 2),
  plural2ndPerson: Word('отешете', 2),
  plural3rdPerson: Word('отешут', 2),
  masculinePast: Word('отесал', 4),
  femininePast: Word('отесала', 4),
  neuterPast: Word('отесало', 4),
  pluralPast: Word('отесали', 4),
  imperativeInformal: Word('отеши', 4),
  imperativeFormal: Word('отешите', 4),
  imperfect: [],
};

perfectVerbs.set(отесать.name.text, отесать);

export { отесать };