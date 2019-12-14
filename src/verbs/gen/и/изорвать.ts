import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изорвать: PerfectVerb = {
  name: Word('изорвать', 5),
  singular1stPerson: Word('изорву', 5),
  singular2ndPerson: Word('изорвёшь', 5),
  singular3rdPerson: Word('изорвёт', 5),
  plural1stPerson: Word('изорвём', 5),
  plural2ndPerson: Word('изорвёте', 5),
  plural3rdPerson: Word('изорвут', 5),
  masculinePast: Word('изорвал', 5),
  femininePast: Word('изорвала', 7),
  neuterPast: Word('изорвало', 5),
  pluralPast: Word('изорвали', 5),
  imperativeInformal: Word('изорви', 5),
  imperativeFormal: Word('изорвите', 5),
  imperfect: [],
};

perfectVerbs.set(изорвать.name.text, изорвать);

export { изорвать };