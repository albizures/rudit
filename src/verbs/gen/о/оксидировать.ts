import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оксидировать: PerfectVerb = {
  name: Word('оксидировать', 5),
  singular1stPerson: Word('оксидирую', 5),
  singular2ndPerson: Word('оксидируешь', 5),
  singular3rdPerson: Word('оксидирует', 5),
  plural1stPerson: Word('оксидируем', 5),
  plural2ndPerson: Word('оксидируете', 5),
  plural3rdPerson: Word('оксидируют', 5),
  masculinePast: Word('оксидировал', 5),
  femininePast: Word('оксидировала', 5),
  neuterPast: Word('оксидировало', 5),
  pluralPast: Word('оксидировали', 5),
  imperativeInformal: Word('оксидируй', 5),
  imperativeFormal: Word('оксидируйте', 5),
  imperfect: [],
};

perfectVerbs.set(оксидировать.name.text, оксидировать);

export { оксидировать };