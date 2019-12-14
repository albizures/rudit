import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашвартовать: PerfectVerb = {
  name: Word('зашвартовать', 9),
  singular1stPerson: Word('зашвартую', 7),
  singular2ndPerson: Word('зашвартуешь', 7),
  singular3rdPerson: Word('зашвартует', 7),
  plural1stPerson: Word('зашвартуем', 7),
  plural2ndPerson: Word('зашвартуете', 7),
  plural3rdPerson: Word('зашвартуют', 7),
  masculinePast: Word('зашвартовал', 9),
  femininePast: Word('зашвартовала', 9),
  neuterPast: Word('зашвартовало', 9),
  pluralPast: Word('зашвартовали', 9),
  imperativeInformal: Word('зашвартуй', 7),
  imperativeFormal: Word('зашвартуйте', 7),
  imperfect: [],
};

perfectVerbs.set(зашвартовать.name.text, зашвартовать);

export { зашвартовать };