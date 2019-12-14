import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрекламировать: PerfectVerb = {
  name: Word('разрекламировать', 9),
  singular1stPerson: Word('разрекламирую', 9),
  singular2ndPerson: Word('разрекламируешь', 9),
  singular3rdPerson: Word('разрекламирует', 9),
  plural1stPerson: Word('разрекламируем', 9),
  plural2ndPerson: Word('разрекламируете', 9),
  plural3rdPerson: Word('разрекламируют', 9),
  masculinePast: Word('разрекламировал', 9),
  femininePast: Word('разрекламировала', 9),
  neuterPast: Word('разрекламировало', 9),
  pluralPast: Word('разрекламировали', 9),
  imperativeInformal: Word('разрекламируй', 9),
  imperativeFormal: Word('разрекламируйте', 9),
  imperfect: [],
};

perfectVerbs.set(разрекламировать.name.text, разрекламировать);

export { разрекламировать };