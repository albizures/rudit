import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплошать: PerfectVerb = {
  name: Word('оплошать', 5),
  singular1stPerson: Word('оплошаю', 5),
  singular2ndPerson: Word('оплошаешь', 5),
  singular3rdPerson: Word('оплошает', 5),
  plural1stPerson: Word('оплошаем', 5),
  plural2ndPerson: Word('оплошаете', 5),
  plural3rdPerson: Word('оплошают', 5),
  masculinePast: Word('оплошал', 5),
  femininePast: Word('оплошала', 5),
  neuterPast: Word('оплошало', 5),
  pluralPast: Word('оплошали', 5),
  imperativeInformal: Word('оплошай', 5),
  imperativeFormal: Word('оплошайте', 5),
  imperfect: [],
};

perfectVerbs.set(оплошать.name.text, оплошать);

export { оплошать };