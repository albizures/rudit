import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нормировать: PerfectVerb = {
  name: Word('нормировать', 8),
  singular1stPerson: Word('нормирую', 6),
  singular2ndPerson: Word('нормируешь', 6),
  singular3rdPerson: Word('нормирует', 6),
  plural1stPerson: Word('нормируем', 6),
  plural2ndPerson: Word('нормируете', 6),
  plural3rdPerson: Word('нормируют', 6),
  masculinePast: Word('нормировал', 8),
  femininePast: Word('нормировала', 8),
  neuterPast: Word('нормировало', 8),
  pluralPast: Word('нормировали', 8),
  imperativeInformal: Word('нормируй', 6),
  imperativeFormal: Word('нормируйте', 6),
  imperfect: [],
};

perfectVerbs.set(нормировать.name.text, нормировать);

export { нормировать };