import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захныкать: PerfectVerb = {
  name: Word('захныкать', 4),
  singular1stPerson: Word('захнычу', 4),
  singular2ndPerson: Word('захнычешь', 4),
  singular3rdPerson: Word('захнычет', 4),
  plural1stPerson: Word('захнычем', 4),
  plural2ndPerson: Word('захнычете', 4),
  plural3rdPerson: Word('захнычут', 4),
  masculinePast: Word('захныкал', 4),
  femininePast: Word('захныкала', 4),
  neuterPast: Word('захныкало', 4),
  pluralPast: Word('захныкали', 4),
  imperativeInformal: Word('захнычь', 4),
  imperativeFormal: Word('захнычьте', 4),
  imperfect: [],
};

perfectVerbs.set(захныкать.name.text, захныкать);

export { захныкать };