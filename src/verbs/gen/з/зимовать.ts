import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зимовать: PerfectVerb = {
  name: Word('зимовать', 5),
  singular1stPerson: Word('зимую', 3),
  singular2ndPerson: Word('зимуешь', 3),
  singular3rdPerson: Word('зимует', 3),
  plural1stPerson: Word('зимуем', 3),
  plural2ndPerson: Word('зимуете', 3),
  plural3rdPerson: Word('зимуют', 3),
  masculinePast: Word('зимовал', 5),
  femininePast: Word('зимовала', 5),
  neuterPast: Word('зимовало', 5),
  pluralPast: Word('зимовали', 5),
  imperativeInformal: Word('зимуй', 3),
  imperativeFormal: Word('зимуйте', 3),
  imperfect: ['перезимовать','зазимовать','прозимовать'],
};

perfectVerbs.set(зимовать.name.text, зимовать);

export { зимовать };