import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чесать: PerfectVerb = {
  name: Word('чесать', 3),
  singular1stPerson: Word('чешу', 3),
  singular2ndPerson: Word('чешешь', 1),
  singular3rdPerson: Word('чешет', 1),
  plural1stPerson: Word('чешем', 1),
  plural2ndPerson: Word('чешете', 1),
  plural3rdPerson: Word('чешут', 1),
  masculinePast: Word('чесал', 3),
  femininePast: Word('чесала', 3),
  neuterPast: Word('чесало', 3),
  pluralPast: Word('чесали', 3),
  imperativeInformal: Word('чеши', 3),
  imperativeFormal: Word('чешите', 3),
  imperfect: ['почесать'],
};

perfectVerbs.set(чесать.name.text, чесать);

export { чесать };