import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const радировать: PerfectVerb = {
  name: Word('радировать', 3),
  singular1stPerson: Word('радирую', 3),
  singular2ndPerson: Word('радируешь', 3),
  singular3rdPerson: Word('радирует', 3),
  plural1stPerson: Word('радируем', 3),
  plural2ndPerson: Word('радируете', 3),
  plural3rdPerson: Word('радируют', 3),
  masculinePast: Word('радировал', 3),
  femininePast: Word('радировала', 3),
  neuterPast: Word('радировало', 3),
  pluralPast: Word('радировали', 3),
  imperativeInformal: Word('радируй', 3),
  imperativeFormal: Word('радируйте', 3),
  imperfect: [],
};

perfectVerbs.set(радировать.name.text, радировать);

export { радировать };