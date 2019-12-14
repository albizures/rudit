import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инвертировать: PerfectVerb = {
  name: Word('инвертировать', 6),
  singular1stPerson: Word('инвертирую', 6),
  singular2ndPerson: Word('инвертируешь', 6),
  singular3rdPerson: Word('инвертирует', 6),
  plural1stPerson: Word('инвертируем', 6),
  plural2ndPerson: Word('инвертируете', 6),
  plural3rdPerson: Word('инвертируют', 6),
  masculinePast: Word('инвертировал', 6),
  femininePast: Word('инвертировала', 6),
  neuterPast: Word('инвертировало', 6),
  pluralPast: Word('инвертировали', 6),
  imperativeInformal: Word('инвертируй', 6),
  imperativeFormal: Word('инвертируйте', 6),
  imperfect: [],
};

perfectVerbs.set(инвертировать.name.text, инвертировать);

export { инвертировать };