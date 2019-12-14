import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const катапультировать: PerfectVerb = {
  name: Word('катапультировать', 9),
  singular1stPerson: Word('катапультирую', 9),
  singular2ndPerson: Word('катапультируешь', 9),
  singular3rdPerson: Word('катапультирует', 9),
  plural1stPerson: Word('катапультируем', 9),
  plural2ndPerson: Word('катапультируете', 9),
  plural3rdPerson: Word('катапультируют', 9),
  masculinePast: Word('катапультировал', 9),
  femininePast: Word('катапультировала', 9),
  neuterPast: Word('катапультировало', 9),
  pluralPast: Word('катапультировали', 9),
  imperativeInformal: Word('катапультируй', 9),
  imperativeFormal: Word('катапультируйте', 9),
  imperfect: [],
};

perfectVerbs.set(катапультировать.name.text, катапультировать);

export { катапультировать };