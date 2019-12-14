import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспоследовать: PerfectVerb = {
  name: Word('воспоследовать', 7),
  singular1stPerson: Word('воспоследую', 7),
  singular2ndPerson: Word('воспоследуешь', 7),
  singular3rdPerson: Word('воспоследует', 7),
  plural1stPerson: Word('воспоследуем', 7),
  plural2ndPerson: Word('воспоследуете', 7),
  plural3rdPerson: Word('воспоследуют', 7),
  masculinePast: Word('воспоследовал', 7),
  femininePast: Word('воспоследовала', 7),
  neuterPast: Word('воспоследовало', 7),
  pluralPast: Word('воспоследовали', 7),
  imperativeInformal: Word('воспоследуй', 7),
  imperativeFormal: Word('воспоследуйте', 7),
  imperfect: [],
};

perfectVerbs.set(воспоследовать.name.text, воспоследовать);

export { воспоследовать };