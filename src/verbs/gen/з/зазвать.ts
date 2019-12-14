import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазвать: PerfectVerb = {
  name: Word('зазвать', 4),
  singular1stPerson: Word('зазову', 5),
  singular2ndPerson: Word('зазовёшь', 5),
  singular3rdPerson: Word('зазовёт', 5),
  plural1stPerson: Word('зазовём', 5),
  plural2ndPerson: Word('зазовёте', 5),
  plural3rdPerson: Word('зазовут', 5),
  masculinePast: Word('зазвал', 4),
  femininePast: Word('зазвала', 6),
  neuterPast: Word('зазвало', 4),
  pluralPast: Word('зазвали', 4),
  imperativeInformal: Word('зазови', 5),
  imperativeFormal: Word('зазовите', 5),
  imperfect: [],
};

perfectVerbs.set(зазвать.name.text, зазвать);

export { зазвать };