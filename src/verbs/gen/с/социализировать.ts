import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const социализировать: PerfectVerb = {
  name: Word('социализировать', 8),
  singular1stPerson: Word('социализирую', 8),
  singular2ndPerson: Word('социализируешь', 8),
  singular3rdPerson: Word('социализирует', 8),
  plural1stPerson: Word('социализируем', 8),
  plural2ndPerson: Word('социализируете', 8),
  plural3rdPerson: Word('социализируют', 8),
  masculinePast: Word('социализировал', 8),
  femininePast: Word('социализировала', 8),
  neuterPast: Word('социализировало', 8),
  pluralPast: Word('социализировали', 8),
  imperativeInformal: Word('социализируй', 8),
  imperativeFormal: Word('социализируйте', 8),
  imperfect: [],
};

perfectVerbs.set(социализировать.name.text, социализировать);

export { социализировать };