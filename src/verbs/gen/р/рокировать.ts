import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рокировать: PerfectVerb = {
  name: Word('рокировать', 7),
  singular1stPerson: Word('рокирую', 5),
  singular2ndPerson: Word('рокируешь', 5),
  singular3rdPerson: Word('рокирует', 5),
  plural1stPerson: Word('рокируем', 5),
  plural2ndPerson: Word('рокируете', 5),
  plural3rdPerson: Word('рокируют', 5),
  masculinePast: Word('рокировал', 7),
  femininePast: Word('рокировала', 7),
  neuterPast: Word('рокировало', 7),
  pluralPast: Word('рокировали', 7),
  imperativeInformal: Word('рокируй', 5),
  imperativeFormal: Word('рокируйте', 5),
  imperfect: [],
};

perfectVerbs.set(рокировать.name.text, рокировать);

export { рокировать };