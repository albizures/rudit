import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оснащать: PerfectVerb = {
  name: Word('оснащать', 5),
  singular1stPerson: Word('оснащаю', 5),
  singular2ndPerson: Word('оснащаешь', 5),
  singular3rdPerson: Word('оснащает', 5),
  plural1stPerson: Word('оснащаем', 5),
  plural2ndPerson: Word('оснащаете', 5),
  plural3rdPerson: Word('оснащают', 5),
  masculinePast: Word('оснащал', 5),
  femininePast: Word('оснащала', 5),
  neuterPast: Word('оснащало', 5),
  pluralPast: Word('оснащали', 5),
  imperativeInformal: Word('оснащай', 5),
  imperativeFormal: Word('оснащайте', 5),
  imperfect: [],
};

perfectVerbs.set(оснащать.name.text, оснащать);

export { оснащать };