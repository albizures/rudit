import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздать: PerfectVerb = {
  name: Word('раздать', 4),
  singular1stPerson: Word('раздам', 4),
  singular2ndPerson: Word('раздашь', 4),
  singular3rdPerson: Word('раздаст', 4),
  plural1stPerson: Word('раздадим', 6),
  plural2ndPerson: Word('раздадите', 6),
  plural3rdPerson: Word('раздадут', 6),
  masculinePast: Word('раздал', 4),
  femininePast: Word('раздала', 6),
  neuterPast: Word('раздало,раздало'', 4),
  pluralPast: Word('раздали', 4),
  imperativeInformal: Word('раздай', 4),
  imperativeFormal: Word('раздайте', 4),
  imperfect: ['раздавать'],
};

perfectVerbs.set(раздать.name.text, раздать);

export { раздать };