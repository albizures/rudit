import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const консолидировать: PerfectVerb = {
  name: Word('консолидировать', 8),
  singular1stPerson: Word('консолидирую', 8),
  singular2ndPerson: Word('консолидируешь', 8),
  singular3rdPerson: Word('консолидирует', 8),
  plural1stPerson: Word('консолидируем', 8),
  plural2ndPerson: Word('консолидируете', 8),
  plural3rdPerson: Word('консолидируют', 8),
  masculinePast: Word('консолидировал', 8),
  femininePast: Word('консолидировала', 8),
  neuterPast: Word('консолидировало', 8),
  pluralPast: Word('консолидировали', 8),
  imperativeInformal: Word('консолидируй', 8),
  imperativeFormal: Word('консолидируйте', 8),
  imperfect: [],
};

perfectVerbs.set(консолидировать.name.text, консолидировать);

export { консолидировать };