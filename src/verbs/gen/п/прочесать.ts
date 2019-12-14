import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочесать: PerfectVerb = {
  name: Word('прочесать', 6),
  singular1stPerson: Word('прочешу', 6),
  singular2ndPerson: Word('прочешешь', 4),
  singular3rdPerson: Word('прочешет', 4),
  plural1stPerson: Word('прочешем', 4),
  plural2ndPerson: Word('прочешете', 4),
  plural3rdPerson: Word('прочешут', 4),
  masculinePast: Word('прочесал', 6),
  femininePast: Word('прочесала', 6),
  neuterPast: Word('прочесало', 6),
  pluralPast: Word('прочесали', 6),
  imperativeInformal: Word('прочеши', 6),
  imperativeFormal: Word('прочешите', 6),
  imperfect: [],
};

perfectVerbs.set(прочесать.name.text, прочесать);

export { прочесать };