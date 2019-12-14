import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запланировать: PerfectVerb = {
  name: Word('запланировать', 6),
  singular1stPerson: Word('запланирую', 6),
  singular2ndPerson: Word('запланируешь', 6),
  singular3rdPerson: Word('запланирует', 6),
  plural1stPerson: Word('запланируем', 6),
  plural2ndPerson: Word('запланируете', 6),
  plural3rdPerson: Word('запланируют', 6),
  masculinePast: Word('запланировал', 6),
  femininePast: Word('запланировала', 6),
  neuterPast: Word('запланировало', 6),
  pluralPast: Word('запланировали', 6),
  imperativeInformal: Word('запланируй', 6),
  imperativeFormal: Word('запланируйте', 6),
  imperfect: [],
};

perfectVerbs.set(запланировать.name.text, запланировать);

export { запланировать };