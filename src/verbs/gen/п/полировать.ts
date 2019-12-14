import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полировать: PerfectVerb = {
  name: Word('полировать', 7),
  singular1stPerson: Word('полирую', 5),
  singular2ndPerson: Word('полируешь', 5),
  singular3rdPerson: Word('полирует', 5),
  plural1stPerson: Word('полируем', 5),
  plural2ndPerson: Word('полируете', 5),
  plural3rdPerson: Word('полируют', 5),
  masculinePast: Word('полировал', 7),
  femininePast: Word('полировала', 7),
  neuterPast: Word('полировало', 7),
  pluralPast: Word('полировали', 7),
  imperativeInformal: Word('полируй', 5),
  imperativeFormal: Word('полируйте', 5),
  imperfect: ['отполировать'],
};

perfectVerbs.set(полировать.name.text, полировать);

export { полировать };