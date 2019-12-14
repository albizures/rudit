import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсоветовать: PerfectVerb = {
  name: Word('отсоветовать', 5),
  singular1stPerson: Word('отсоветую', 5),
  singular2ndPerson: Word('отсоветуешь', 5),
  singular3rdPerson: Word('отсоветует', 5),
  plural1stPerson: Word('отсоветуем', 5),
  plural2ndPerson: Word('отсоветуете', 5),
  plural3rdPerson: Word('отсоветуют', 5),
  masculinePast: Word('отсоветовал', 5),
  femininePast: Word('отсоветовала', 5),
  neuterPast: Word('отсоветовало', 5),
  pluralPast: Word('отсоветовали', 5),
  imperativeInformal: Word('отсоветуй', 5),
  imperativeFormal: Word('отсоветуйте', 5),
  imperfect: [],
};

perfectVerbs.set(отсоветовать.name.text, отсоветовать);

export { отсоветовать };