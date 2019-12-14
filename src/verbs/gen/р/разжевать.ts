import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжевать: PerfectVerb = {
  name: Word('разжевать', 6),
  singular1stPerson: Word('разжую', 5),
  singular2ndPerson: Word('разжуёшь', 1),
  singular3rdPerson: Word('разжуёт', 1),
  plural1stPerson: Word('разжуём', 1),
  plural2ndPerson: Word('разжуёте', 1),
  plural3rdPerson: Word('разжуют', 5),
  masculinePast: Word('разжевал', 6),
  femininePast: Word('разжевала', 6),
  neuterPast: Word('разжевало', 6),
  pluralPast: Word('разжевали', 6),
  imperativeInformal: Word('разжуй', 4),
  imperativeFormal: Word('разжуйте', 4),
  imperfect: [],
};

perfectVerbs.set(разжевать.name.text, разжевать);

export { разжевать };