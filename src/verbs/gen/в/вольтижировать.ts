import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вольтижировать: PerfectVerb = {
  name: Word('вольтижировать', 7),
  singular1stPerson: Word('вольтижирую', 7),
  singular2ndPerson: Word('вольтижируешь', 7),
  singular3rdPerson: Word('вольтижирует', 7),
  plural1stPerson: Word('вольтижируем', 7),
  plural2ndPerson: Word('вольтижируете', 7),
  plural3rdPerson: Word('вольтижируют', 7),
  masculinePast: Word('вольтижировал', 7),
  femininePast: Word('вольтижировала', 7),
  neuterPast: Word('вольтижировало', 7),
  pluralPast: Word('вольтижировали', 7),
  imperativeInformal: Word('вольтижируй', 7),
  imperativeFormal: Word('вольтижируйте', 7),
  imperfect: [],
};

perfectVerbs.set(вольтижировать.name.text, вольтижировать);

export { вольтижировать };