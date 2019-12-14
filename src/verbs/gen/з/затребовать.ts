import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затребовать: PerfectVerb = {
  name: Word('затребовать', 4),
  singular1stPerson: Word('затребую', 4),
  singular2ndPerson: Word('затребуешь', 4),
  singular3rdPerson: Word('затребует', 4),
  plural1stPerson: Word('затребуем', 4),
  plural2ndPerson: Word('затребуете', 4),
  plural3rdPerson: Word('затребуют', 4),
  masculinePast: Word('затребовал', 4),
  femininePast: Word('затребовала', 4),
  neuterPast: Word('затребовало', 4),
  pluralPast: Word('затребовали', 4),
  imperativeInformal: Word('затребуй', 4),
  imperativeFormal: Word('затребуйте', 4),
  imperfect: [],
};

perfectVerbs.set(затребовать.name.text, затребовать);

export { затребовать };