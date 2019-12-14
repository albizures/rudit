import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздать: PerfectVerb = {
  name: Word('воздать', 4),
  singular1stPerson: Word('воздам', 4),
  singular2ndPerson: Word('воздашь', 4),
  singular3rdPerson: Word('воздаст', 4),
  plural1stPerson: Word('воздадим', 4),
  plural2ndPerson: Word('воздадите', 6),
  plural3rdPerson: Word('воздадут', 6),
  masculinePast: Word('воздал', 4),
  femininePast: Word('воздала', 6),
  neuterPast: Word('воздало', 4),
  pluralPast: Word('воздали', 4),
  imperativeInformal: Word('воздай', 4),
  imperativeFormal: Word('воздайте', 4),
  imperfect: [],
};

perfectVerbs.set(воздать.name.text, воздать);

export { воздать };