import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соврать: PerfectVerb = {
  name: Word('соврать', 4),
  singular1stPerson: Word('совру', 4),
  singular2ndPerson: Word('соврёшь', 4),
  singular3rdPerson: Word('соврёт', 4),
  plural1stPerson: Word('соврём', 4),
  plural2ndPerson: Word('соврёте', 4),
  plural3rdPerson: Word('соврут', 4),
  masculinePast: Word('соврал', 4),
  femininePast: Word('соврала', 6),
  neuterPast: Word('соврало', 4),
  pluralPast: Word('соврали', 4),
  imperativeInformal: Word('соври', 4),
  imperativeFormal: Word('соврите', 4),
  imperfect: ['врать'],
};

perfectVerbs.set(соврать.name.text, соврать);

export { соврать };