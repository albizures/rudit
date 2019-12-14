import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тренировать: PerfectVerb = {
  name: Word('тренировать', 8),
  singular1stPerson: Word('тренирую', 6),
  singular2ndPerson: Word('тренируешь', 6),
  singular3rdPerson: Word('тренирует', 6),
  plural1stPerson: Word('тренируем', 6),
  plural2ndPerson: Word('тренируете', 6),
  plural3rdPerson: Word('тренируют', 6),
  masculinePast: Word('тренировал', 8),
  femininePast: Word('тренировала', 8),
  neuterPast: Word('тренировало', 8),
  pluralPast: Word('тренировали', 8),
  imperativeInformal: Word('тренируй', 6),
  imperativeFormal: Word('тренируйте', 6),
  imperfect: [],
};

perfectVerbs.set(тренировать.name.text, тренировать);

export { тренировать };