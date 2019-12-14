import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сорвать: PerfectVerb = {
  name: Word('сорвать', 4),
  singular1stPerson: Word('сорву', 4),
  singular2ndPerson: Word('сорвёшь', 4),
  singular3rdPerson: Word('сорвёт', 4),
  plural1stPerson: Word('сорвём', 4),
  plural2ndPerson: Word('сорвёте', 4),
  plural3rdPerson: Word('сорвут', 4),
  masculinePast: Word('сорвал', 4),
  femininePast: Word('сорвала', 6),
  neuterPast: Word('сорвало', 4),
  pluralPast: Word('сорвали', 4),
  imperativeInformal: Word('сорви', 4),
  imperativeFormal: Word('сорвите', 4),
  imperfect: [],
};

perfectVerbs.set(сорвать.name.text, сорвать);

export { сорвать };