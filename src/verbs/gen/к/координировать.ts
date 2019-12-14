import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const координировать: PerfectVerb = {
  name: Word('координировать', 7),
  singular1stPerson: Word('координирую', 7),
  singular2ndPerson: Word('координируешь', 7),
  singular3rdPerson: Word('координирует', 7),
  plural1stPerson: Word('координируем', 7),
  plural2ndPerson: Word('координируете', 7),
  plural3rdPerson: Word('координируют', 7),
  masculinePast: Word('координировал', 7),
  femininePast: Word('координировала', 7),
  neuterPast: Word('координировало', 7),
  pluralPast: Word('координировали', 7),
  imperativeInformal: Word('координируй', 7),
  imperativeFormal: Word('координируйте', 7),
  imperfect: ['скоординировать'],
};

perfectVerbs.set(координировать.name.text, координировать);

export { координировать };