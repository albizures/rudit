import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const геройствовать: PerfectVerb = {
  name: Word('геройствовать', 3),
  singular1stPerson: Word('геройствую', 3),
  singular2ndPerson: Word('геройствуешь', 3),
  singular3rdPerson: Word('геройствует', 3),
  plural1stPerson: Word('геройствуем', 3),
  plural2ndPerson: Word('геройствуете', 3),
  plural3rdPerson: Word('геройствуют', 3),
  masculinePast: Word('геройствовал', 3),
  femininePast: Word('геройствовала', 3),
  neuterPast: Word('геройствовало', 3),
  pluralPast: Word('геройствовали', 3),
  imperativeInformal: Word('геройствуй', 3),
  imperativeFormal: Word('геройствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(геройствовать.name.text, геройствовать);

export { геройствовать };