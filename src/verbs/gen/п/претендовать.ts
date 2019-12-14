import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const претендовать: PerfectVerb = {
  name: Word('претендовать', 9),
  singular1stPerson: Word('претендую', 7),
  singular2ndPerson: Word('претендуешь', 7),
  singular3rdPerson: Word('претендует', 7),
  plural1stPerson: Word('претендуем', 7),
  plural2ndPerson: Word('претендуете', 7),
  plural3rdPerson: Word('претендуют', 7),
  masculinePast: Word('претендовал', 9),
  femininePast: Word('претендовала', 9),
  neuterPast: Word('претендовало', 9),
  pluralPast: Word('претендовали', 9),
  imperativeInformal: Word('претендуй', 7),
  imperativeFormal: Word('претендуйте', 7),
  imperfect: [],
};

perfectVerbs.set(претендовать.name.text, претендовать);

export { претендовать };