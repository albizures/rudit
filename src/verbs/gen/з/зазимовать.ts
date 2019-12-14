import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазимовать: PerfectVerb = {
  name: Word('зазимовать', 7),
  singular1stPerson: Word('зазимую', 5),
  singular2ndPerson: Word('зазимуешь', 5),
  singular3rdPerson: Word('зазимует', 5),
  plural1stPerson: Word('зазимуем', 5),
  plural2ndPerson: Word('зазимуете', 5),
  plural3rdPerson: Word('зазимуют', 5),
  masculinePast: Word('зазимовал', 7),
  femininePast: Word('зазимовала', 7),
  neuterPast: Word('зазимовало', 7),
  pluralPast: Word('зазимовали', 7),
  imperativeInformal: Word('зазимуй', 5),
  imperativeFormal: Word('зазимуйте', 5),
  imperfect: [],
};

perfectVerbs.set(зазимовать.name.text, зазимовать);

export { зазимовать };