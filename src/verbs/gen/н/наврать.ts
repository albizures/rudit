import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наврать: PerfectVerb = {
  name: Word('наврать', 4),
  singular1stPerson: Word('навру', 4),
  singular2ndPerson: Word('наврёшь', 1),
  singular3rdPerson: Word('наврёт', 1),
  plural1stPerson: Word('наврём', 1),
  plural2ndPerson: Word('наврёте', 1),
  plural3rdPerson: Word('наврут', 4),
  masculinePast: Word('наврал', 4),
  femininePast: Word('наврала', 6),
  neuterPast: Word('наврало', 4),
  pluralPast: Word('наврали', 4),
  imperativeInformal: Word('наври', 4),
  imperativeFormal: Word('наврите', 4),
  imperfect: [],
};

perfectVerbs.set(наврать.name.text, наврать);

export { наврать };