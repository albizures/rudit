import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резюмировать: PerfectVerb = {
  name: Word('резюмировать', 5),
  singular1stPerson: Word('резюмирую', 5),
  singular2ndPerson: Word('резюмируешь', 5),
  singular3rdPerson: Word('резюмирует', 5),
  plural1stPerson: Word('резюмируем', 5),
  plural2ndPerson: Word('резюмируете', 5),
  plural3rdPerson: Word('резюмируют', 5),
  masculinePast: Word('резюмировал', 5),
  femininePast: Word('резюмировала', 5),
  neuterPast: Word('резюмировало', 5),
  pluralPast: Word('резюмировали', 5),
  imperativeInformal: Word('резюмируй', 5),
  imperativeFormal: Word('резюмируйте', 5),
  imperfect: [],
};

perfectVerbs.set(резюмировать.name.text, резюмировать);

export { резюмировать };