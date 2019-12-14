import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытесать: PerfectVerb = {
  name: Word('вытесать', 1),
  singular1stPerson: Word('вытешу', 1),
  singular2ndPerson: Word('вытешешь', 1),
  singular3rdPerson: Word('вытешет', 1),
  plural1stPerson: Word('вытешем', 1),
  plural2ndPerson: Word('вытешете', 1),
  plural3rdPerson: Word('вытешут', 1),
  masculinePast: Word('вытесал', 1),
  femininePast: Word('вытесала', 1),
  neuterPast: Word('вытесало', 1),
  pluralPast: Word('вытесали', 1),
  imperativeInformal: Word('вытеши', 1),
  imperativeFormal: Word('вытешите', 1),
  imperfect: [],
};

perfectVerbs.set(вытесать.name.text, вытесать);

export { вытесать };