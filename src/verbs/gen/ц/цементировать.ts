import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цементировать: PerfectVerb = {
  name: Word('цементировать', 6),
  singular1stPerson: Word('цементирую', 6),
  singular2ndPerson: Word('цементируешь', 6),
  singular3rdPerson: Word('цементирует', 6),
  plural1stPerson: Word('цементируем', 6),
  plural2ndPerson: Word('цементируете', 6),
  plural3rdPerson: Word('цементируют', 6),
  masculinePast: Word('цементировал', 6),
  femininePast: Word('цементировала', 6),
  neuterPast: Word('цементировало', 6),
  pluralPast: Word('цементировали', 6),
  imperativeInformal: Word('цементируй', 6),
  imperativeFormal: Word('цементируйте', 6),
  imperfect: [],
};

perfectVerbs.set(цементировать.name.text, цементировать);

export { цементировать };