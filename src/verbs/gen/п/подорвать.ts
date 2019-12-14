import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подорвать: PerfectVerb = {
  name: Word('подорвать', 6),
  singular1stPerson: Word('подорву', 6),
  singular2ndPerson: Word('подорвёшь', 1),
  singular3rdPerson: Word('подорвёт', 1),
  plural1stPerson: Word('подорвём', 1),
  plural2ndPerson: Word('подорвёте', 8),
  plural3rdPerson: Word('подорвут', 6),
  masculinePast: Word('подорвал', 6),
  femininePast: Word('подорвала', 8),
  neuterPast: Word('подорвало', 6),
  pluralPast: Word('подорвали', 6),
  imperativeInformal: Word('подорви', 6),
  imperativeFormal: Word('подорвите', 6),
  imperfect: [],
};

perfectVerbs.set(подорвать.name.text, подорвать);

export { подорвать };