import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const целовать: PerfectVerb = {
  name: Word('целовать', 5),
  singular1stPerson: Word('целую', 3),
  singular2ndPerson: Word('целуешь', 3),
  singular3rdPerson: Word('целует', 3),
  plural1stPerson: Word('целуем', 3),
  plural2ndPerson: Word('целуете', 3),
  plural3rdPerson: Word('целуют', 3),
  masculinePast: Word('целовал', 5),
  femininePast: Word('целовала', 5),
  neuterPast: Word('целовало', 5),
  pluralPast: Word('целовали', 5),
  imperativeInformal: Word('целуй', 3),
  imperativeFormal: Word('целуйте', 3),
  imperfect: ['поцеловать'],
};

perfectVerbs.set(целовать.name.text, целовать);

export { целовать };