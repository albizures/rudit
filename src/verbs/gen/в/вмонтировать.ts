import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмонтировать: PerfectVerb = {
  name: Word('вмонтировать', 5),
  singular1stPerson: Word('вмонтирую', 5),
  singular2ndPerson: Word('вмонтируешь', 5),
  singular3rdPerson: Word('вмонтирует', 5),
  plural1stPerson: Word('вмонтируем', 5),
  plural2ndPerson: Word('вмонтируете', 5),
  plural3rdPerson: Word('вмонтируют', 5),
  masculinePast: Word('вмонтировал', 5),
  femininePast: Word('вмонтировала', 5),
  neuterPast: Word('вмонтировало', 5),
  pluralPast: Word('вмонтировали', 5),
  imperativeInformal: Word('вмонтируй', 5),
  imperativeFormal: Word('вмонтируйте', 5),
  imperfect: [],
};

perfectVerbs.set(вмонтировать.name.text, вмонтировать);

export { вмонтировать };