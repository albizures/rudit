import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const силосовать: PerfectVerb = {
  name: Word('силосовать', 7),
  singular1stPerson: Word('силосую', 5),
  singular2ndPerson: Word('силосуешь', 5),
  singular3rdPerson: Word('силосует', 5),
  plural1stPerson: Word('силосуем', 5),
  plural2ndPerson: Word('силосуете', 5),
  plural3rdPerson: Word('силосуют', 5),
  masculinePast: Word('силосовал', 7),
  femininePast: Word('силосовала', 7),
  neuterPast: Word('силосовало', 7),
  pluralPast: Word('силосовали', 7),
  imperativeInformal: Word('силосуй', 5),
  imperativeFormal: Word('силосуйте', 5),
  imperfect: [],
};

perfectVerbs.set(силосовать.name.text, силосовать);

export { силосовать };