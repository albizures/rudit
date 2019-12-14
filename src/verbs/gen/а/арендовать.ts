import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const арендовать: PerfectVerb = {
  name: Word('арендовать', 7),
  singular1stPerson: Word('арендую', 5),
  singular2ndPerson: Word('арендуешь', 5),
  singular3rdPerson: Word('арендует', 5),
  plural1stPerson: Word('арендуем', 5),
  plural2ndPerson: Word('арендуете', 5),
  plural3rdPerson: Word('арендуют', 5),
  masculinePast: Word('арендовал', 7),
  femininePast: Word('арендовала', 7),
  neuterPast: Word('арендовало', 7),
  pluralPast: Word('арендовали', 7),
  imperativeInformal: Word('арендуй', 5),
  imperativeFormal: Word('арендуйте', 5),
  imperfect: [],
};

perfectVerbs.set(арендовать.name.text, арендовать);

export { арендовать };