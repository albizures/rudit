import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инкубировать: PerfectVerb = {
  name: Word('инкубировать', 5),
  singular1stPerson: Word('инкубирую', 5),
  singular2ndPerson: Word('инкубируешь', 5),
  singular3rdPerson: Word('инкубирует', 5),
  plural1stPerson: Word('инкубируем', 5),
  plural2ndPerson: Word('инкубируете', 5),
  plural3rdPerson: Word('инкубируют', 5),
  masculinePast: Word('инкубировал', 5),
  femininePast: Word('инкубировала', 5),
  neuterPast: Word('инкубировало', 5),
  pluralPast: Word('инкубировали', 5),
  imperativeInformal: Word('инкубируй', 5),
  imperativeFormal: Word('инкубируйте', 5),
  imperfect: [],
};

perfectVerbs.set(инкубировать.name.text, инкубировать);

export { инкубировать };