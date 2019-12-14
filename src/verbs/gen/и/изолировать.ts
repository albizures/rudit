import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изолировать: PerfectVerb = {
  name: Word('изолировать', 4),
  singular1stPerson: Word('изолирую', 4),
  singular2ndPerson: Word('изолируешь', 4),
  singular3rdPerson: Word('изолирует', 4),
  plural1stPerson: Word('изолируем', 4),
  plural2ndPerson: Word('изолируете', 4),
  plural3rdPerson: Word('изолируют', 4),
  masculinePast: Word('изолировал', 4),
  femininePast: Word('изолировала', 4),
  neuterPast: Word('изолировало', 4),
  pluralPast: Word('изолировали', 4),
  imperativeInformal: Word('изолируй', 4),
  imperativeFormal: Word('изолируйте', 4),
  imperfect: [],
};

perfectVerbs.set(изолировать.name.text, изолировать);

export { изолировать };