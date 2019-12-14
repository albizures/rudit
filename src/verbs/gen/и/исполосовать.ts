import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исполосовать: PerfectVerb = {
  name: Word('исполосовать', 9),
  singular1stPerson: Word('исполосую', 7),
  singular2ndPerson: Word('исполосуешь', 7),
  singular3rdPerson: Word('исполосует', 7),
  plural1stPerson: Word('исполосуем', 7),
  plural2ndPerson: Word('исполосуете', 7),
  plural3rdPerson: Word('исполосуют', 7),
  masculinePast: Word('исполосовал', 9),
  femininePast: Word('исполосовала', 9),
  neuterPast: Word('исполосовало', 9),
  pluralPast: Word('исполосовали', 9),
  imperativeInformal: Word('исполосуй', 7),
  imperativeFormal: Word('исполосуйте', 7),
  imperfect: [],
};

perfectVerbs.set(исполосовать.name.text, исполосовать);

export { исполосовать };