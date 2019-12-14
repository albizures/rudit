import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инкассировать: PerfectVerb = {
  name: Word('инкассировать', 6),
  singular1stPerson: Word('инкассирую', 6),
  singular2ndPerson: Word('инкассируешь', 6),
  singular3rdPerson: Word('инкассирует', 6),
  plural1stPerson: Word('инкассируем', 6),
  plural2ndPerson: Word('инкассируете', 6),
  plural3rdPerson: Word('инкассируют', 6),
  masculinePast: Word('инкассировал', 6),
  femininePast: Word('инкассировала', 6),
  neuterPast: Word('инкассировало', 6),
  pluralPast: Word('инкассировали', 6),
  imperativeInformal: Word('инкассируй', 6),
  imperativeFormal: Word('инкассируйте', 6),
  imperfect: [],
};

perfectVerbs.set(инкассировать.name.text, инкассировать);

export { инкассировать };