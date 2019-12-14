import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const базировать: PerfectVerb = {
  name: Word('базировать', 3),
  singular1stPerson: Word('базирую', 3),
  singular2ndPerson: Word('базируешь', 3),
  singular3rdPerson: Word('базирует', 3),
  plural1stPerson: Word('базируем', 3),
  plural2ndPerson: Word('базируете', 3),
  plural3rdPerson: Word('базируют', 3),
  masculinePast: Word('базировал', 3),
  femininePast: Word('базировала', 3),
  neuterPast: Word('базировало', 3),
  pluralPast: Word('базировали', 3),
  imperativeInformal: Word('базируй', 3),
  imperativeFormal: Word('базируйте', 3),
  imperfect: [],
};

perfectVerbs.set(базировать.name.text, базировать);

export { базировать };