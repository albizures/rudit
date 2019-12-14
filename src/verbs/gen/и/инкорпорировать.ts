import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инкорпорировать: PerfectVerb = {
  name: Word('инкорпорировать', 8),
  singular1stPerson: Word('инкорпорирую', 8),
  singular2ndPerson: Word('инкорпорируешь', 8),
  singular3rdPerson: Word('инкорпорирует', 8),
  plural1stPerson: Word('инкорпорируем', 8),
  plural2ndPerson: Word('инкорпорируете', 8),
  plural3rdPerson: Word('инкорпорируют', 8),
  masculinePast: Word('инкорпорировал', 8),
  femininePast: Word('инкорпорировала', 8),
  neuterPast: Word('инкорпорировало', 8),
  pluralPast: Word('инкорпорировали', 8),
  imperativeInformal: Word('инкорпорируй', 8),
  imperativeFormal: Word('инкорпорируйте', 8),
  imperfect: [],
};

perfectVerbs.set(инкорпорировать.name.text, инкорпорировать);

export { инкорпорировать };