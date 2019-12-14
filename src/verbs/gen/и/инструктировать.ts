import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инструктировать: PerfectVerb = {
  name: Word('инструктировать', 8),
  singular1stPerson: Word('инструктирую', 8),
  singular2ndPerson: Word('инструктируешь', 8),
  singular3rdPerson: Word('инструктирует', 8),
  plural1stPerson: Word('инструктируем', 8),
  plural2ndPerson: Word('инструктируете', 8),
  plural3rdPerson: Word('инструктируют', 8),
  masculinePast: Word('инструктировал', 8),
  femininePast: Word('инструктировала', 8),
  neuterPast: Word('инструктировало', 8),
  pluralPast: Word('инструктировали', 8),
  imperativeInformal: Word('инструктируй', 8),
  imperativeFormal: Word('инструктируйте', 8),
  imperfect: [],
};

perfectVerbs.set(инструктировать.name.text, инструктировать);

export { инструктировать };