import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсутствовать: PerfectVerb = {
  name: Word('отсутствовать', 3),
  singular1stPerson: Word('отсутствую', 3),
  singular2ndPerson: Word('отсутствуешь', 3),
  singular3rdPerson: Word('отсутствует', 3),
  plural1stPerson: Word('отсутствуем', 3),
  plural2ndPerson: Word('отсутствуете', 3),
  plural3rdPerson: Word('отсутствуют', 3),
  masculinePast: Word('отсутствовал', 3),
  femininePast: Word('отсутствовала', 3),
  neuterPast: Word('отсутствовало', 3),
  pluralPast: Word('отсутствовали', 3),
  imperativeInformal: Word('отсутствуй', 3),
  imperativeFormal: Word('отсутствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(отсутствовать.name.text, отсутствовать);

export { отсутствовать };