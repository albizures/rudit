import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скоординировать: PerfectVerb = {
  name: Word('скоординировать', 8),
  singular1stPerson: Word('скоординирую', 8),
  singular2ndPerson: Word('скоординируешь', 8),
  singular3rdPerson: Word('скоординирует', 8),
  plural1stPerson: Word('скоординируем', 8),
  plural2ndPerson: Word('скоординируете', 8),
  plural3rdPerson: Word('скоординируют', 8),
  masculinePast: Word('скоординировал', 8),
  femininePast: Word('скоординировала', 8),
  neuterPast: Word('скоординировало', 8),
  pluralPast: Word('скоординировали', 8),
  imperativeInformal: Word('скоординируй', 8),
  imperativeFormal: Word('скоординируйте', 8),
  imperfect: [],
};

perfectVerbs.set(скоординировать.name.text, скоординировать);

export { скоординировать };