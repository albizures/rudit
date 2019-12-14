import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычесать: PerfectVerb = {
  name: Word('вычесать', 1),
  singular1stPerson: Word('вычешу', 1),
  singular2ndPerson: Word('вычешешь', 1),
  singular3rdPerson: Word('вычешет', 1),
  plural1stPerson: Word('вычешем', 1),
  plural2ndPerson: Word('вычешете', 1),
  plural3rdPerson: Word('вычешут', 1),
  masculinePast: Word('вычесал', 1),
  femininePast: Word('вычесала', 1),
  neuterPast: Word('вычесало', 1),
  pluralPast: Word('вычесали', 1),
  imperativeInformal: Word('вычеши', 1),
  imperativeFormal: Word('вычешите', 1),
  imperfect: [],
};

perfectVerbs.set(вычесать.name.text, вычесать);

export { вычесать };