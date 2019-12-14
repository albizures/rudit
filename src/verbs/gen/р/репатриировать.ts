import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const репатриировать: PerfectVerb = {
  name: Word('репатриировать', 7),
  singular1stPerson: Word('репатриирую', 7),
  singular2ndPerson: Word('репатриируешь', 7),
  singular3rdPerson: Word('репатриирует', 7),
  plural1stPerson: Word('репатриируем', 7),
  plural2ndPerson: Word('репатриируете', 7),
  plural3rdPerson: Word('репатриируют', 7),
  masculinePast: Word('репатриировал', 7),
  femininePast: Word('репатриировала', 7),
  neuterPast: Word('репатриировало', 7),
  pluralPast: Word('репатриировали', 7),
  imperativeInformal: Word('репатриируй', 7),
  imperativeFormal: Word('репатриируйте', 7),
  imperfect: [],
};

perfectVerbs.set(репатриировать.name.text, репатриировать);

export { репатриировать };