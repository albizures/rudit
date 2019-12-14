import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мурлыкать: PerfectVerb = {
  name: Word('мурлыкать', 4),
  singular1stPerson: Word('мурлычу', 4),
  singular2ndPerson: Word('мурлычешь', 4),
  singular3rdPerson: Word('мурлычет', 4),
  plural1stPerson: Word('мурлычем', 4),
  plural2ndPerson: Word('мурлычете', 4),
  plural3rdPerson: Word('мурлычут', 4),
  masculinePast: Word('мурлыкал', 4),
  femininePast: Word('мурлыкала', 4),
  neuterPast: Word('мурлыкало', 4),
  pluralPast: Word('мурлыкали', 4),
  imperativeInformal: Word('мурлычь', 4),
  imperativeFormal: Word('мурлычьте', 4),
  imperfect: [],
};

perfectVerbs.set(мурлыкать.name.text, мурлыкать);

export { мурлыкать };