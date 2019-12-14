import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджать: PerfectVerb = {
  name: Word('поджать', 4),
  singular1stPerson: Word('подожму', 6),
  singular2ndPerson: Word('подожмёшь', 6),
  singular3rdPerson: Word('подожмёт', 6),
  plural1stPerson: Word('подожмём', 6),
  plural2ndPerson: Word('подожмёте', 6),
  plural3rdPerson: Word('подожмут', 6),
  masculinePast: Word('поджал', 4),
  femininePast: Word('поджала', 4),
  neuterPast: Word('поджало', 4),
  pluralPast: Word('поджали', 4),
  imperativeInformal: Word('подожми', 6),
  imperativeFormal: Word('подожмите', 6),
  imperfect: [],
};

perfectVerbs.set(поджать.name.text, поджать);

export { поджать };