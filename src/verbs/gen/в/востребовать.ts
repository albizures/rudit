import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const востребовать: PerfectVerb = {
  name: Word('востребовать', 5),
  singular1stPerson: Word('востребую', 5),
  singular2ndPerson: Word('востребуешь', 5),
  singular3rdPerson: Word('востребует', 5),
  plural1stPerson: Word('востребуем', 5),
  plural2ndPerson: Word('востребуете', 5),
  plural3rdPerson: Word('востребуют', 5),
  masculinePast: Word('востребовал', 5),
  femininePast: Word('востребовала', 5),
  neuterPast: Word('востребовало', 5),
  pluralPast: Word('востребовали', 5),
  imperativeInformal: Word('востребуй', 5),
  imperativeFormal: Word('востребуйте', 5),
  imperfect: [],
};

perfectVerbs.set(востребовать.name.text, востребовать);

export { востребовать };