import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забраковать: PerfectVerb = {
  name: Word('забраковать', 8),
  singular1stPerson: Word('забракую', 6),
  singular2ndPerson: Word('забракуешь', 6),
  singular3rdPerson: Word('забракует', 6),
  plural1stPerson: Word('забракуем', 6),
  plural2ndPerson: Word('забракуете', 6),
  plural3rdPerson: Word('забракуют', 6),
  masculinePast: Word('забраковал', 8),
  femininePast: Word('забраковала', 8),
  neuterPast: Word('забраковало', 8),
  pluralPast: Word('забраковали', 8),
  imperativeInformal: Word('забракуй', 6),
  imperativeFormal: Word('забракуйте', 6),
  imperfect: [],
};

perfectVerbs.set(забраковать.name.text, забраковать);

export { забраковать };