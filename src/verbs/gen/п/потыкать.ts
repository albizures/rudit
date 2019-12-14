import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потыкать: PerfectVerb = {
  name: Word('потыкать', 3),
  singular1stPerson: Word('потычу', 3),
  singular2ndPerson: Word('потычешь', 3),
  singular3rdPerson: Word('потычет', 3),
  plural1stPerson: Word('потычем', 3),
  plural2ndPerson: Word('потычете', 3),
  plural3rdPerson: Word('потычут', 3),
  masculinePast: Word('потыкал', 3),
  femininePast: Word('потыкала', 3),
  neuterPast: Word('потыкало', 3),
  pluralPast: Word('потыкали', 3),
  imperativeInformal: Word('потычь', 3),
  imperativeFormal: Word('потычьте', 3),
  imperfect: [],
};

perfectVerbs.set(потыкать.name.text, потыкать);

export { потыкать };