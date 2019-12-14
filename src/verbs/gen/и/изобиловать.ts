import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изобиловать: PerfectVerb = {
  name: Word('изобиловать', 4),
  singular1stPerson: Word('изобилую', 4),
  singular2ndPerson: Word('изобилуешь', 4),
  singular3rdPerson: Word('изобилует', 4),
  plural1stPerson: Word('изобилуем', 4),
  plural2ndPerson: Word('изобилуете', 4),
  plural3rdPerson: Word('изобилуют', 4),
  masculinePast: Word('изобиловал', 4),
  femininePast: Word('изобиловала', 4),
  neuterPast: Word('изобиловало', 4),
  pluralPast: Word('изобиловали', 4),
  imperativeInformal: Word('изобилуй', 4),
  imperativeFormal: Word('изобилуйте', 4),
  imperfect: [],
};

perfectVerbs.set(изобиловать.name.text, изобиловать);

export { изобиловать };