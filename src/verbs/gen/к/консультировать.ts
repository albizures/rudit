import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const консультировать: PerfectVerb = {
  name: Word('консультировать', 8),
  singular1stPerson: Word('консультирую', 8),
  singular2ndPerson: Word('консультируешь', 8),
  singular3rdPerson: Word('консультирует', 8),
  plural1stPerson: Word('консультируем', 8),
  plural2ndPerson: Word('консультируете', 8),
  plural3rdPerson: Word('консультируют', 8),
  masculinePast: Word('консультировал', 8),
  femininePast: Word('консультировала', 8),
  neuterPast: Word('консультировало', 8),
  pluralPast: Word('консультировали', 8),
  imperativeInformal: Word('консультируй', 8),
  imperativeFormal: Word('консультируйте', 8),
  imperfect: [],
};

perfectVerbs.set(консультировать.name.text, консультировать);

export { консультировать };