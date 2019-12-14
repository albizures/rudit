import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттекать: PerfectVerb = {
  name: Word('оттекать', 5),
  singular1stPerson: Word('оттекаю', 5),
  singular2ndPerson: Word('оттекаешь', 5),
  singular3rdPerson: Word('оттекает', 5),
  plural1stPerson: Word('оттекаем', 5),
  plural2ndPerson: Word('оттекаете', 5),
  plural3rdPerson: Word('оттекают', 5),
  masculinePast: Word('оттекал', 5),
  femininePast: Word('оттекала', 5),
  neuterPast: Word('оттекало', 5),
  pluralPast: Word('оттекали', 5),
  imperativeInformal: Word('оттекай', 5),
  imperativeFormal: Word('оттекайте', 5),
  imperfect: [],
};

perfectVerbs.set(оттекать.name.text, оттекать);

export { оттекать };