import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const минировать: PerfectVerb = {
  name: Word('минировать', 3),
  singular1stPerson: Word('минирую', 3),
  singular2ndPerson: Word('минируешь', 3),
  singular3rdPerson: Word('минирует', 3),
  plural1stPerson: Word('минируем', 3),
  plural2ndPerson: Word('минируете', 3),
  plural3rdPerson: Word('минируют', 3),
  masculinePast: Word('минировал', 3),
  femininePast: Word('минировала', 3),
  neuterPast: Word('минировало', 3),
  pluralPast: Word('минировали', 3),
  imperativeInformal: Word('минируй', 3),
  imperativeFormal: Word('минируйте', 3),
  imperfect: [],
};

perfectVerbs.set(минировать.name.text, минировать);

export { минировать };