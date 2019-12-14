import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттесать: PerfectVerb = {
  name: Word('оттесать', 5),
  singular1stPerson: Word('оттешу', 5),
  singular2ndPerson: Word('оттешешь', 3),
  singular3rdPerson: Word('оттешет', 3),
  plural1stPerson: Word('оттешем', 3),
  plural2ndPerson: Word('оттешете', 3),
  plural3rdPerson: Word('оттешут', 3),
  masculinePast: Word('оттесал', 5),
  femininePast: Word('оттесала', 5),
  neuterPast: Word('оттесало', 5),
  pluralPast: Word('оттесали', 5),
  imperativeInformal: Word('оттеши', 5),
  imperativeFormal: Word('оттешите', 5),
  imperfect: [],
};

perfectVerbs.set(оттесать.name.text, оттесать);

export { оттесать };