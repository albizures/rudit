import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вибрировать: PerfectVerb = {
  name: Word('вибрировать', 4),
  singular1stPerson: Word('вибрирую', 4),
  singular2ndPerson: Word('вибрируешь', 4),
  singular3rdPerson: Word('вибрирует', 4),
  plural1stPerson: Word('вибрируем', 4),
  plural2ndPerson: Word('вибрируете', 4),
  plural3rdPerson: Word('вибрируют', 4),
  masculinePast: Word('вибрировал', 4),
  femininePast: Word('вибрировала', 4),
  neuterPast: Word('вибрировало', 4),
  pluralPast: Word('вибрировали', 4),
  imperativeInformal: Word('вибрируй', 4),
  imperativeFormal: Word('вибрируйте', 4),
  imperfect: [],
};

perfectVerbs.set(вибрировать.name.text, вибрировать);

export { вибрировать };