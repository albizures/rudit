import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозвать: PerfectVerb = {
  name: Word('обозвать', 5),
  singular1stPerson: Word('обзову', 5),
  singular2ndPerson: Word('обзовёшь', 0),
  singular3rdPerson: Word('обзовёт', 0),
  plural1stPerson: Word('обзовём', 0),
  plural2ndPerson: Word('обзовёте', 7),
  plural3rdPerson: Word('обзовут', 5),
  masculinePast: Word('обозвал', 5),
  femininePast: Word('обозвала', 7),
  neuterPast: Word('обозвало', 5),
  pluralPast: Word('обозвали', 5),
  imperativeInformal: Word('обзови', 5),
  imperativeFormal: Word('обзовите', 5),
  imperfect: [],
};

perfectVerbs.set(обозвать.name.text, обозвать);

export { обозвать };