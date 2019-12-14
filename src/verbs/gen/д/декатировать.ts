import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const декатировать: PerfectVerb = {
  name: Word('декатировать', 9),
  singular1stPerson: Word('декатирую', 7),
  singular2ndPerson: Word('декатируешь', 7),
  singular3rdPerson: Word('декатирует', 7),
  plural1stPerson: Word('декатируем', 7),
  plural2ndPerson: Word('декатируете', 7),
  plural3rdPerson: Word('декатируют', 7),
  masculinePast: Word('декатировал', 9),
  femininePast: Word('декатировала', 9),
  neuterPast: Word('декатировало', 9),
  pluralPast: Word('декатировали', 9),
  imperativeInformal: Word('декатируй', 7),
  imperativeFormal: Word('декатируйте', 7),
  imperfect: [],
};

perfectVerbs.set(декатировать.name.text, декатировать);

export { декатировать };