import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затесать: PerfectVerb = {
  name: Word('затесать', 5),
  singular1stPerson: Word('затешу', 5),
  singular2ndPerson: Word('затешешь', 3),
  singular3rdPerson: Word('затешет', 3),
  plural1stPerson: Word('затешем', 3),
  plural2ndPerson: Word('затешете', 3),
  plural3rdPerson: Word('затешут', 3),
  masculinePast: Word('затесал', 5),
  femininePast: Word('затесала', 5),
  neuterPast: Word('затесало', 5),
  pluralPast: Word('затесали', 5),
  imperativeInformal: Word('затеши', 5),
  imperativeFormal: Word('затешите', 5),
  imperfect: [],
};

perfectVerbs.set(затесать.name.text, затесать);

export { затесать };