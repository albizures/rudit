import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const терроризировать: PerfectVerb = {
  name: Word('терроризировать', 8),
  singular1stPerson: Word('терроризирую', 8),
  singular2ndPerson: Word('терроризируешь', 8),
  singular3rdPerson: Word('терроризирует', 8),
  plural1stPerson: Word('терроризируем', 8),
  plural2ndPerson: Word('терроризируете', 8),
  plural3rdPerson: Word('терроризируют', 8),
  masculinePast: Word('терроризировал', 8),
  femininePast: Word('терроризировала', 8),
  neuterPast: Word('терроризировало', 8),
  pluralPast: Word('терроризировали', 8),
  imperativeInformal: Word('терроризируй', 8),
  imperativeFormal: Word('терроризируйте', 8),
  imperfect: [],
};

perfectVerbs.set(терроризировать.name.text, терроризировать);

export { терроризировать };