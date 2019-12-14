import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полемизировать: PerfectVerb = {
  name: Word('полемизировать', 7),
  singular1stPerson: Word('полемизирую', 7),
  singular2ndPerson: Word('полемизируешь', 7),
  singular3rdPerson: Word('полемизирует', 7),
  plural1stPerson: Word('полемизируем', 7),
  plural2ndPerson: Word('полемизируете', 7),
  plural3rdPerson: Word('полемизируют', 7),
  masculinePast: Word('полемизировал', 7),
  femininePast: Word('полемизировала', 7),
  neuterPast: Word('полемизировало', 7),
  pluralPast: Word('полемизировали', 7),
  imperativeInformal: Word('полемизируй', 7),
  imperativeFormal: Word('полемизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(полемизировать.name.text, полемизировать);

export { полемизировать };