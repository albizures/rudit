import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохотать: PerfectVerb = {
  name: Word('грохотать', 6),
  singular1stPerson: Word('грохочу', 6),
  singular2ndPerson: Word('грохочешь', 4),
  singular3rdPerson: Word('грохочет', 4),
  plural1stPerson: Word('грохочем', 4),
  plural2ndPerson: Word('грохочете', 4),
  plural3rdPerson: Word('грохочут', 4),
  masculinePast: Word('грохотал', 6),
  femininePast: Word('грохотала', 6),
  neuterPast: Word('грохотало', 6),
  pluralPast: Word('грохотали', 6),
  imperativeInformal: Word('грохочи', 6),
  imperativeFormal: Word('грохочите', 6),
  imperfect: [],
};

perfectVerbs.set(грохотать.name.text, грохотать);

export { грохотать };