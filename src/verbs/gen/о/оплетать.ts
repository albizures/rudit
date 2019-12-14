import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплетать: PerfectVerb = {
  name: Word('оплетать', 5),
  singular1stPerson: Word('оплетаю', 5),
  singular2ndPerson: Word('оплетаешь', 5),
  singular3rdPerson: Word('оплетает', 5),
  plural1stPerson: Word('оплетаем', 5),
  plural2ndPerson: Word('оплетаете', 5),
  plural3rdPerson: Word('оплетают', 5),
  masculinePast: Word('оплетал', 5),
  femininePast: Word('оплетала', 5),
  neuterPast: Word('оплетало', 5),
  pluralPast: Word('оплетали', 5),
  imperativeInformal: Word('оплетай', 5),
  imperativeFormal: Word('оплетайте', 5),
  imperfect: [],
};

perfectVerbs.set(оплетать.name.text, оплетать);

export { оплетать };