import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оптировать: PerfectVerb = {
  name: Word('оптировать', 3),
  singular1stPerson: Word('оптирую', 3),
  singular2ndPerson: Word('оптируешь', 3),
  singular3rdPerson: Word('оптирует', 3),
  plural1stPerson: Word('оптируем', 3),
  plural2ndPerson: Word('оптируете', 3),
  plural3rdPerson: Word('оптируют', 3),
  masculinePast: Word('оптировал', 3),
  femininePast: Word('оптировала', 3),
  neuterPast: Word('оптировало', 3),
  pluralPast: Word('оптировали', 3),
  imperativeInformal: Word('оптируй', 3),
  imperativeFormal: Word('оптируйте', 3),
  imperfect: [],
};

perfectVerbs.set(оптировать.name.text, оптировать);

export { оптировать };