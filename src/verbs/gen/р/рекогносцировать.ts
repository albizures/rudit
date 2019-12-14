import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рекогносцировать: PerfectVerb = {
  name: Word('рекогносцировать', 9),
  singular1stPerson: Word('рекогносцирую', 9),
  singular2ndPerson: Word('рекогносцируешь', 9),
  singular3rdPerson: Word('рекогносцирует', 9),
  plural1stPerson: Word('рекогносцируем', 9),
  plural2ndPerson: Word('рекогносцируете', 9),
  plural3rdPerson: Word('рекогносцируют', 9),
  masculinePast: Word('рекогносцировал', 9),
  femininePast: Word('рекогносцировала', 9),
  neuterPast: Word('рекогносцировало', 9),
  pluralPast: Word('рекогносцировали', 9),
  imperativeInformal: Word('рекогносцируй', 9),
  imperativeFormal: Word('рекогносцируйте', 9),
  imperfect: [],
};

perfectVerbs.set(рекогносцировать.name.text, рекогносцировать);

export { рекогносцировать };