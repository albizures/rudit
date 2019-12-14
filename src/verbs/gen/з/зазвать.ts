import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазвать: PerfectVerb = {
  name: Word('зазвать', 4),
  singular1stPerson: Word('зазову', 5),
  singular2ndPerson: Word('зазовёшь', 1),
  singular3rdPerson: Word('зазовёт', 1),
  plural1stPerson: Word('зазовём', 1),
  plural2ndPerson: Word('зазовёте', 1),
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