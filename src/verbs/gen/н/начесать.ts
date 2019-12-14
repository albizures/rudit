import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начесать: PerfectVerb = {
  name: Word('начесать', 5),
  singular1stPerson: Word('начешу', 5),
  singular2ndPerson: Word('начешешь', 3),
  singular3rdPerson: Word('начешет', 3),
  plural1stPerson: Word('начешем', 3),
  plural2ndPerson: Word('начешете', 3),
  plural3rdPerson: Word('начешут', 3),
  masculinePast: Word('начесал', 5),
  femininePast: Word('начесала', 5),
  neuterPast: Word('начесало', 5),
  pluralPast: Word('начесали', 5),
  imperativeInformal: Word('начеши', 5),
  imperativeFormal: Word('начешите', 5),
  imperfect: [],
};

perfectVerbs.set(начесать.name.text, начесать);

export { начесать };