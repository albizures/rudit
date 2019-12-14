import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const популяризировать: PerfectVerb = {
  name: Word('популяризировать', 9),
  singular1stPerson: Word('популяризирую', 9),
  singular2ndPerson: Word('популяризируешь', 9),
  singular3rdPerson: Word('популяризирует', 9),
  plural1stPerson: Word('популяризируем', 9),
  plural2ndPerson: Word('популяризируете', 9),
  plural3rdPerson: Word('популяризируют', 9),
  masculinePast: Word('популяризировал', 9),
  femininePast: Word('популяризировала', 9),
  neuterPast: Word('популяризировало', 9),
  pluralPast: Word('популяризировали', 9),
  imperativeInformal: Word('популяризируй', 9),
  imperativeFormal: Word('популяризируйте', 9),
  imperfect: [],
};

perfectVerbs.set(популяризировать.name.text, популяризировать);

export { популяризировать };