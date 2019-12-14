import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вентилировать: PerfectVerb = {
  name: Word('вентилировать', 6),
  singular1stPerson: Word('вентилирую', 6),
  singular2ndPerson: Word('вентилируешь', 6),
  singular3rdPerson: Word('вентилирует', 6),
  plural1stPerson: Word('вентилируем', 6),
  plural2ndPerson: Word('вентилируете', 6),
  plural3rdPerson: Word('вентилируют', 6),
  masculinePast: Word('вентилировал', 6),
  femininePast: Word('вентилировала', 6),
  neuterPast: Word('вентилировало', 6),
  pluralPast: Word('вентилировали', 6),
  imperativeInformal: Word('вентилируй', 6),
  imperativeFormal: Word('вентилируйте', 6),
  imperfect: [],
};

perfectVerbs.set(вентилировать.name.text, вентилировать);

export { вентилировать };