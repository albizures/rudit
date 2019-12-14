import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттаять: PerfectVerb = {
  name: Word('оттаять', 3),
  singular1stPerson: Word('оттаю', 3),
  singular2ndPerson: Word('оттаешь', 3),
  singular3rdPerson: Word('оттает', 3),
  plural1stPerson: Word('оттаем', 3),
  plural2ndPerson: Word('оттаете', 3),
  plural3rdPerson: Word('оттают', 3),
  masculinePast: Word('оттаял', 3),
  femininePast: Word('оттаяла', 3),
  neuterPast: Word('оттаяло', 3),
  pluralPast: Word('оттаяли', 3),
  imperativeInformal: Word('оттай', 3),
  imperativeFormal: Word('оттайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттаять.name.text, оттаять);

export { оттаять };