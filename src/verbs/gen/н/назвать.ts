import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назвать: PerfectVerb = {
  name: Word('назвать', 4),
  singular1stPerson: Word('назову', 5),
  singular2ndPerson: Word('назовёшь', 5),
  singular3rdPerson: Word('назовёт', 5),
  plural1stPerson: Word('назовём', 5),
  plural2ndPerson: Word('назовёте', 5),
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