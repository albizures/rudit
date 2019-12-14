import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оккупировать: PerfectVerb = {
  name: Word('оккупировать', 5),
  singular1stPerson: Word('оккупирую', 5),
  singular2ndPerson: Word('оккупируешь', 5),
  singular3rdPerson: Word('оккупирует', 5),
  plural1stPerson: Word('оккупируем', 5),
  plural2ndPerson: Word('оккупируете', 5),
  plural3rdPerson: Word('оккупируют', 5),
  masculinePast: Word('оккупировал', 5),
  femininePast: Word('оккупировала', 5),
  neuterPast: Word('оккупировало', 5),
  pluralPast: Word('оккупировали', 5),
  imperativeInformal: Word('оккупируй', 5),
  imperativeFormal: Word('оккупируйте', 5),
  imperfect: [],
};

perfectVerbs.set(оккупировать.name.text, оккупировать);

export { оккупировать };