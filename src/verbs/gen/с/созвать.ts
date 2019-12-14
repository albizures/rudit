import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созвать: PerfectVerb = {
  name: Word('созвать', 4),
  singular1stPerson: Word('созову', 5),
  singular2ndPerson: Word('созовёшь', 1),
  singular3rdPerson: Word('созовёт', 1),
  plural1stPerson: Word('созовём', 1),
  plural2ndPerson: Word('созовёте', 7),
  plural3rdPerson: Word('созовут', 5),
  masculinePast: Word('созвал', 4),
  femininePast: Word('созвала', 6),
  neuterPast: Word('созвало', 4),
  pluralPast: Word('созвали', 4),
  imperativeInformal: Word('созови', 5),
  imperativeFormal: Word('созовите', 5),
  imperfect: [],
};

perfectVerbs.set(созвать.name.text, созвать);

export { созвать };