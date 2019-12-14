import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инкриминировать: PerfectVerb = {
  name: Word('инкриминировать', 8),
  singular1stPerson: Word('инкриминирую', 8),
  singular2ndPerson: Word('инкриминируешь', 8),
  singular3rdPerson: Word('инкриминирует', 8),
  plural1stPerson: Word('инкриминируем', 8),
  plural2ndPerson: Word('инкриминируете', 8),
  plural3rdPerson: Word('инкриминируют', 8),
  masculinePast: Word('инкриминировал', 8),
  femininePast: Word('инкриминировала', 8),
  neuterPast: Word('инкриминировало', 8),
  pluralPast: Word('инкриминировали', 8),
  imperativeInformal: Word('инкриминируй', 8),
  imperativeFormal: Word('инкриминируйте', 8),
  imperfect: [],
};

perfectVerbs.set(инкриминировать.name.text, инкриминировать);

export { инкриминировать };