import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колесовать: PerfectVerb = {
  name: Word('колесовать', 7),
  singular1stPerson: Word('колесую', 5),
  singular2ndPerson: Word('колесуешь', 5),
  singular3rdPerson: Word('колесует', 5),
  plural1stPerson: Word('колесуем', 5),
  plural2ndPerson: Word('колесуете', 5),
  plural3rdPerson: Word('колесуют', 5),
  masculinePast: Word('колесовал', 7),
  femininePast: Word('колесовала', 7),
  neuterPast: Word('колесовало', 7),
  pluralPast: Word('колесовали', 7),
  imperativeInformal: Word('колесуй', 5),
  imperativeFormal: Word('колесуйте', 5),
  imperfect: [],
};

perfectVerbs.set(колесовать.name.text, колесовать);

export { колесовать };