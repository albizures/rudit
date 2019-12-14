import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инвестировать: PerfectVerb = {
  name: Word('инвестировать', 6),
  singular1stPerson: Word('инвестирую', 6),
  singular2ndPerson: Word('инвестируешь', 6),
  singular3rdPerson: Word('инвестирует', 6),
  plural1stPerson: Word('инвестируем', 6),
  plural2ndPerson: Word('инвестируете', 6),
  plural3rdPerson: Word('инвестируют', 6),
  masculinePast: Word('инвестировал', 6),
  femininePast: Word('инвестировала', 6),
  neuterPast: Word('инвестировало', 6),
  pluralPast: Word('инвестировали', 6),
  imperativeInformal: Word('инвестируй', 6),
  imperativeFormal: Word('инвестируйте', 6),
  imperfect: [],
};

perfectVerbs.set(инвестировать.name.text, инвестировать);

export { инвестировать };