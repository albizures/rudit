import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призвать: PerfectVerb = {
  name: Word('призвать', 5),
  singular1stPerson: Word('призову', 6),
  singular2ndPerson: Word('призовёшь', 2),
  singular3rdPerson: Word('призовёт', 2),
  plural1stPerson: Word('призовём', 2),
  plural2ndPerson: Word('призовёте', 8),
  plural3rdPerson: Word('призовут', 6),
  masculinePast: Word('призвал', 5),
  femininePast: Word('призвала', 5),
  neuterPast: Word('призвало', 5),
  pluralPast: Word('призвали', 5),
  imperativeInformal: Word('призови', 6),
  imperativeFormal: Word('призовите', 6),
  imperfect: ['призывать'],
};

perfectVerbs.set(призвать.name.text, призвать);

export { призвать };