import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const курлыкать: PerfectVerb = {
  name: Word('курлыкать', 4),
  singular1stPerson: Word('курлычу', 4),
  singular2ndPerson: Word('курлычешь', 4),
  singular3rdPerson: Word('курлычет', 4),
  plural1stPerson: Word('курлычем', 4),
  plural2ndPerson: Word('курлычете', 4),
  plural3rdPerson: Word('курлычут', 4),
  masculinePast: Word('курлыкал', 4),
  femininePast: Word('курлыкала', 4),
  neuterPast: Word('курлыкало', 4),
  pluralPast: Word('курлыкали', 4),
  imperativeInformal: Word('курлычь', 4),
  imperativeFormal: Word('курлычьте', 4),
  imperfect: [],
};

perfectVerbs.set(курлыкать.name.text, курлыкать);

export { курлыкать };