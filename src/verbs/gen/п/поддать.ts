import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддать: PerfectVerb = {
  name: Word('поддать', 4),
  singular1stPerson: Word('поддам', 4),
  singular2ndPerson: Word('поддашь', 4),
  singular3rdPerson: Word('поддаст', 4),
  plural1stPerson: Word('поддадим', 6),
  plural2ndPerson: Word('поддадите', 6),
  plural3rdPerson: Word('поддадут', 6),
  masculinePast: Word('поддал//по'ддал', 4),
  femininePast: Word('поддала', 6),
  neuterPast: Word('поддало//по'ддало', 4),
  pluralPast: Word('поддали//по'ддали', 4),
  imperativeInformal: Word('поддай', 4),
  imperativeFormal: Word('поддайте', 4),
  imperfect: [],
};

perfectVerbs.set(поддать.name.text, поддать);

export { поддать };