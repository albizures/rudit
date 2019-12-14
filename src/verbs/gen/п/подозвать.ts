import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подозвать: PerfectVerb = {
  name: Word('подозвать', 6),
  singular1stPerson: Word('подзову', 6),
  singular2ndPerson: Word('подзовёшь', 1),
  singular3rdPerson: Word('подзовёт', 1),
  plural1stPerson: Word('подзовём', 1),
  plural2ndPerson: Word('подзовёте', 8),
  plural3rdPerson: Word('подзовут', 6),
  masculinePast: Word('подозвал', 6),
  femininePast: Word('подозвала', 8),
  neuterPast: Word('подозвало', 6),
  pluralPast: Word('подозвали', 6),
  imperativeInformal: Word('подзови', 6),
  imperativeFormal: Word('подзовите', 6),
  imperfect: [],
};

perfectVerbs.set(подозвать.name.text, подозвать);

export { подозвать };