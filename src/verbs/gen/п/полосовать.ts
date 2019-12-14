import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полосовать: PerfectVerb = {
  name: Word('полосовать', 7),
  singular1stPerson: Word('полосую', 5),
  singular2ndPerson: Word('полосуешь', 5),
  singular3rdPerson: Word('полосует', 5),
  plural1stPerson: Word('полосуем', 5),
  plural2ndPerson: Word('полосуете', 5),
  plural3rdPerson: Word('полосуют', 5),
  masculinePast: Word('полосовал', 7),
  femininePast: Word('полосовала', 7),
  neuterPast: Word('полосовало', 7),
  pluralPast: Word('полосовали', 7),
  imperativeInformal: Word('полосуй', 5),
  imperativeFormal: Word('полосуйте', 5),
  imperfect: [],
};

perfectVerbs.set(полосовать.name.text, полосовать);

export { полосовать };