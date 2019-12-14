import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозвать: PerfectVerb = {
  name: Word('прозвать', 5),
  singular1stPerson: Word('прозову', 6),
  singular2ndPerson: Word('прозовёшь', 6),
  singular3rdPerson: Word('прозовёт', 6),
  plural1stPerson: Word('прозовём', 6),
  plural2ndPerson: Word('прозовёте', 6),
  plural3rdPerson: Word('прозовут', 6),
  masculinePast: Word('прозвал', 5),
  femininePast: Word('прозвала', 7),
  neuterPast: Word('прозвало', 5),
  pluralPast: Word('прозвали', 5),
  imperativeInformal: Word('прозови', 6),
  imperativeFormal: Word('прозовите', 6),
  imperfect: [],
};

perfectVerbs.set(прозвать.name.text, прозвать);

export { прозвать };