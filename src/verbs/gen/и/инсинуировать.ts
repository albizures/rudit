import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инсинуировать: PerfectVerb = {
  name: Word('инсинуировать', 6),
  singular1stPerson: Word('инсинуирую', 6),
  singular2ndPerson: Word('инсинуируешь', 6),
  singular3rdPerson: Word('инсинуирует', 6),
  plural1stPerson: Word('инсинуируем', 6),
  plural2ndPerson: Word('инсинуируете', 6),
  plural3rdPerson: Word('инсинуируют', 6),
  masculinePast: Word('инсинуировал', 6),
  femininePast: Word('инсинуировала', 6),
  neuterPast: Word('инсинуировало', 6),
  pluralPast: Word('инсинуировали', 6),
  imperativeInformal: Word('инсинуируй', 6),
  imperativeFormal: Word('инсинуируйте', 6),
  imperfect: [],
};

perfectVerbs.set(инсинуировать.name.text, инсинуировать);

export { инсинуировать };