import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтесать: PerfectVerb = {
  name: Word('обтесать', 5),
  singular1stPerson: Word('обтешу', 5),
  singular2ndPerson: Word('обтешешь', 3),
  singular3rdPerson: Word('обтешет', 3),
  plural1stPerson: Word('обтешем', 3),
  plural2ndPerson: Word('обтешете', 3),
  plural3rdPerson: Word('обтешут', 3),
  masculinePast: Word('обтесал', 5),
  femininePast: Word('обтесала', 5),
  neuterPast: Word('обтесало', 5),
  pluralPast: Word('обтесали', 5),
  imperativeInformal: Word('обтеши', 5),
  imperativeFormal: Word('обтешите', 5),
  imperfect: [],
};

perfectVerbs.set(обтесать.name.text, обтесать);

export { обтесать };