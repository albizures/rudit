import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпестовать: PerfectVerb = {
  name: Word('выпестовать', 1),
  singular1stPerson: Word('выпестую', 1),
  singular2ndPerson: Word('выпестуешь', 1),
  singular3rdPerson: Word('выпестует', 1),
  plural1stPerson: Word('выпестуем', 1),
  plural2ndPerson: Word('выпестуете', 1),
  plural3rdPerson: Word('выпестуют', 1),
  masculinePast: Word('выпестовал', 1),
  femininePast: Word('выпестовала', 1),
  neuterPast: Word('выпестовало', 1),
  pluralPast: Word('выпестовали', 1),
  imperativeInformal: Word('выпестуй', 1),
  imperativeFormal: Word('выпестуйте', 1),
  imperfect: [],
};

perfectVerbs.set(выпестовать.name.text, выпестовать);

export { выпестовать };