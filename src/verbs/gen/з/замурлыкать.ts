import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замурлыкать: PerfectVerb = {
  name: Word('замурлыкать', 6),
  singular1stPerson: Word('замурлычу', 6),
  singular2ndPerson: Word('замурлычешь', 6),
  singular3rdPerson: Word('замурлычет', 6),
  plural1stPerson: Word('замурлычем', 6),
  plural2ndPerson: Word('замурлычете', 6),
  plural3rdPerson: Word('замурлычут', 6),
  masculinePast: Word('замурлыкал', 6),
  femininePast: Word('замурлыкала', 6),
  neuterPast: Word('замурлыкало', 6),
  pluralPast: Word('замурлыкали', 6),
  imperativeInformal: Word('замурлычь', 6),
  imperativeFormal: Word('замурлычьте', 6),
  imperfect: [],
};

perfectVerbs.set(замурлыкать.name.text, замурлыкать);

export { замурлыкать };