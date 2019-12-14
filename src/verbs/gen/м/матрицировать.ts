import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const матрицировать: PerfectVerb = {
  name: Word('матрицировать', 6),
  singular1stPerson: Word('матрицирую', 6),
  singular2ndPerson: Word('матрицируешь', 6),
  singular3rdPerson: Word('матрицирует', 6),
  plural1stPerson: Word('матрицируем', 6),
  plural2ndPerson: Word('матрицируете', 6),
  plural3rdPerson: Word('матрицируют', 6),
  masculinePast: Word('матрицировал', 6),
  femininePast: Word('матрицировала', 6),
  neuterPast: Word('матрицировало', 6),
  pluralPast: Word('матрицировали', 6),
  imperativeInformal: Word('матрицируй', 6),
  imperativeFormal: Word('матрицируйте', 6),
  imperfect: [],
};

perfectVerbs.set(матрицировать.name.text, матрицировать);

export { матрицировать };