import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разорвать: PerfectVerb = {
  name: Word('разорвать', 6),
  singular1stPerson: Word('разорву', 6),
  singular2ndPerson: Word('разорвёшь', 6),
  singular3rdPerson: Word('разорвёт', 6),
  plural1stPerson: Word('разорвём', 6),
  plural2ndPerson: Word('разорвёте', 6),
  plural3rdPerson: Word('разорвут', 6),
  masculinePast: Word('разорвал', 6),
  femininePast: Word('разорвала', 8),
  neuterPast: Word('разорвало', 6),
  pluralPast: Word('разорвали', 6),
  imperativeInformal: Word('разорви', 6),
  imperativeFormal: Word('разорвите', 6),
  imperfect: [],
};

perfectVerbs.set(разорвать.name.text, разорвать);

export { разорвать };