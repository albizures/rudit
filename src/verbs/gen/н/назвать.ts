import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назвать: PerfectVerb = {
  name: Word('назвать', 4),
  singular1stPerson: Word('назову', 5),
  singular2ndPerson: Word('назовёшь', 1),
  singular3rdPerson: Word('назовёт', 1),
  plural1stPerson: Word('назовём', 1),
  plural2ndPerson: Word('назовёте', 1),
  plural3rdPerson: Word('назовут', 5),
  masculinePast: Word('назвал', 4),
  femininePast: Word('назвала', 6),
  neuterPast: Word('назвало', 4),
  pluralPast: Word('назвали', 4),
  imperativeInformal: Word('назови', 5),
  imperativeFormal: Word('назовите', 5),
  imperfect: ['называть'],
};

perfectVerbs.set(назвать.name.text, назвать);

export { назвать };