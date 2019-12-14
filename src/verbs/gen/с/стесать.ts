import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стесать: PerfectVerb = {
  name: Word('стесать', 4),
  singular1stPerson: Word('стешу', 4),
  singular2ndPerson: Word('стешешь', 2),
  singular3rdPerson: Word('стешет', 2),
  plural1stPerson: Word('стешем', 2),
  plural2ndPerson: Word('стешете', 2),
  plural3rdPerson: Word('стешут', 2),
  masculinePast: Word('стесал', 4),
  femininePast: Word('стесала', 4),
  neuterPast: Word('стесало', 4),
  pluralPast: Word('стесали', 4),
  imperativeInformal: Word('стеши', 4),
  imperativeFormal: Word('стешите', 4),
  imperfect: [],
};

perfectVerbs.set(стесать.name.text, стесать);

export { стесать };