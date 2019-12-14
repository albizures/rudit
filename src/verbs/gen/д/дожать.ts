import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожать: PerfectVerb = {
  name: Word('дожать', 3),
  singular1stPerson: Word('дожму', 4),
  singular2ndPerson: Word('дожмёшь', 1),
  singular3rdPerson: Word('дожмёт', 1),
  plural1stPerson: Word('дожмём', 1),
  plural2ndPerson: Word('дожмёте', 6),
  plural3rdPerson: Word('дожмут', 4),
  masculinePast: Word('дожал', 3),
  femininePast: Word('дожала', 3),
  neuterPast: Word('дожало', 3),
  pluralPast: Word('дожали', 3),
  imperativeInformal: Word('дожми', 4),
  imperativeFormal: Word('дожмите', 4),
  imperfect: [],
};

perfectVerbs.set(дожать.name.text, дожать);

export { дожать };