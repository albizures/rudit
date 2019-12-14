import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацементировать: PerfectVerb = {
  name: Word('зацементировать', 8),
  singular1stPerson: Word('зацементирую', 8),
  singular2ndPerson: Word('зацементируешь', 8),
  singular3rdPerson: Word('зацементирует', 8),
  plural1stPerson: Word('зацементируем', 8),
  plural2ndPerson: Word('зацементируете', 8),
  plural3rdPerson: Word('зацементируют', 8),
  masculinePast: Word('зацементировал', 8),
  femininePast: Word('зацементировала', 8),
  neuterPast: Word('зацементировало', 8),
  pluralPast: Word('зацементировали', 8),
  imperativeInformal: Word('зацементируй', 8),
  imperativeFormal: Word('зацементируйте', 8),
  imperfect: [],
};

perfectVerbs.set(зацементировать.name.text, зацементировать);

export { зацементировать };